import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './styles';

export default class Notify extends Component {
  componentDidMount() {
    this.timer = setTimeout(this.props.unmount, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div className={s.notify()}>
        {`The post "${this.props.title}" was successfuly created.`}
      </div>
    );
  }
}

Notify.propTypes = {
  unmount: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
