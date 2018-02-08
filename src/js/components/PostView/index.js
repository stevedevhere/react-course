import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import s from './styles';

class PostView extends React.Component {
  constructor(props) {
    super(props);

    this.renderLinks = this.renderLinks.bind(this);
    this.renderPost = this.renderPost.bind(this);
  }

  componentDidMount() {
    document.title = this.props.data.title;
  }

  renderLinks() {
    if (this.props.data.links) {
      this.props.data.links.map(item =>
        <li key={item.link + item.title}><a href={item.link}>{item.title}</a></li>);
    }
    return null;
  }

  renderPost() {
    if (this.props.data) {
      return (
        <article className={s.container()}>

          <header className={s.header()}>
            <h1 className={s.title()}>
              <Link to="/" className="go-home">home</Link>
              {' / ' + this.props.data.title}
            </h1>
          </header>

          <main className={s.content()}>
            <p>{this.props.data.description}</p>
            <ul>
              {this.renderLinks()}
            </ul>
          </main>

        </article>
      );
    }

    return <p>{`Post with id ${this.props.match.params.postId} doesn't exists!`}<br /><Link to="/">Go home</Link></p>;
  }

  render() {
    return this.renderPost();
  }
}

const mapStateToProps = (state, ownProps) => ({
  data: state.posts.find((item, index) =>
    +index === +ownProps.match.params.postId)
});

export default connect(mapStateToProps)(PostView);
