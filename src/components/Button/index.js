import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './styles';

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    text: '',
    onClick: () => {},
  }
  render() {
    const { text, onClick } = this.props;
    return (
      <button
        className={s.button()}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
}
