/* global document */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateEditedPost } from '../../actions';
import s from './styles';

class PostEdit extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    updateEditedPost: PropTypes.func.isRequired,
    unmount: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.saveAndClose = this.saveAndClose.bind(this);
  }

  componentDidMount() {
    document.title = `Editing the post:  ${this.props.data.title}`;
    this.title.focus();
  }

  componentWillUnmount() {
    document.title = 'Simple react blog';
  }

  saveAndClose(e) {
    e.preventDefault();
    const updated = {
      title: this.title.value,
      description: this.description.value,
    };

    this.props.updateEditedPost(updated, this.props.id);
    this.props.unmount();
  }

  stopPropagation(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }

  handleOnKeyPress() {
    this.focus();
  }

  render() {
    let { title, description } = this.props.data; // eslint-disable-line prefer-const
    description = description.split(' ')
      .filter(letter => letter.trim() !== '' && letter.length)
      .join(' ')
      .replace(/(\r\n|\n|\r|)/gm, '')
      .toString();

    return (
      <div // eslint-disable-line
        className={s.postEditContainer()}
        onClick={this.props.unmount}
        onKeyPress={this.handleOnKeyPress}
      >
        <form // eslint-disable-line
          className={s.postEdit()}
          onClick={this.stopPropagation}
        >
          <input ref={(node) => { this.title = node; }} type="text" defaultValue={title} />
          <textarea ref={(node) => { this.description = node; }} defaultValue={description} />
          <button onClick={this.saveAndClose}>Save & Close</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => (
  { data: state.posts.find((item, index) => index === Number(ownProps.id)) }
);

export default connect(mapStateToProps, { updateEditedPost })(PostEdit);
