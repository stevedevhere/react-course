import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

export default class Slider extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  componentDidMount() {
    this.updateCurrentIndex();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.currentIndex !== nextState.currentIndex;
  }

  componentDidUpdate() {
    this.updateCurrentIndex();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  updateCurrentIndex() {
    const self = this;
    this.timer = setTimeout(() => {
      self.setState({
        currentIndex: self.state.currentIndex < Children.count(this.props.children) - 1
          ? self.state.currentIndex + 1
          : 0,
      });
    }, 2700);
  }

  render() {
    return (
      <div className="slider-container">
        <div className="slider-content">
          {Children.toArray(this.props.children)[this.state.currentIndex]}
        </div>
      </div>
    );
  }
}
