import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Notify extends Component {
  componentDidMount() {
    this.timer = setTimeout(this.props.unmount, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div className="notify">
        The post {`"${this.props.title}"`} was successfuly created.
      </div>
    );
  }
}

Notify.propTypes = {
  unmount: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
