import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions';
import Notify from '../Notify';
import s from './styles';

class AddPost extends React.Component {
  static propTypes = {
    addPost: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      notify: false,
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.unmountNotify = this.unmountNotify.bind(this);
  }

  componentDidMount() {
    this.title.focus();
  }

  componentDidUpdate() {
    this.title.value = '';
    this.description.value = '';
  }

  unmountNotify() {
    this.setState({ notify: false });
  }

  handleOnSubmit(e) {
    e.preventDefault();

    if (this.title.value.trim() !== '' || this.description.value.trim() !== '') {
      const newPost = {
        title: this.title.value,
        description: this.description.value,
      };

      this.props.addPost(newPost);
      this.setState({ notify: true });
    }
  }

  render() {
    return (
      <div className={s.addPost()}>
        {this.state.notify && (
          <Notify
            title={this.title.value}
            unmount={this.unmountNotify}
          />
        )}

        <h3>Add new post</h3>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" ref={(title) => { this.title = title; }} placeholder="Post title" />
          <textarea ref={(descr) => { this.description = descr; }} placeholder="Post content" />
          <button type="submit">Создать новый пост</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addPost })(AddPost);
