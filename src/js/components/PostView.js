import React from 'react';

import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return { data: state.posts.find((item, index) => +index == +ownProps.match.params.postId) }
};

@connect(mapStateToProps)
export default class PostView extends React.Component {

    constructor(props) {
        super(props);

        this.renderLinks = this.renderLinks.bind(this);
        this.renderPost = this.renderPost.bind(this);
    }

    componentDidMount() {
        document.title = this.props.data.title;
    }

    renderLinks() {
        if(this.props.data.links) {
            this.props.data.links.map((item, index) => <li key={index}><a href={item.link}>{item.title}</a></li>);
        } else return null;
    }

    renderPost() {
        if(this.props.data) {
            return (
                <article className="post-view">
                    
                    <header>
                        <h1 className="post-title">
                            <Link to="/" className="go-home">home</Link>
                            {' / ' +this.props.data.title}
                        </h1>
                    </header>

                    <main>
                        <p>{this.props.data.description}</p>
                        <ul className="links">
                            {this.renderLinks()}
                        </ul>
                    </main>

                </article>
            );
        } else {
            return <div>Post with id {this.props.match.params.postId} doesn't exists! <br/><Link to={`/`}>Go home</Link></div>
        }
    }

    render() {
        return this.renderPost();
    }
}

