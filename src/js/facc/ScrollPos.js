import React from 'react';
import PropTypes from 'prop-types';


export default class ScrollPost extends React.Component {

    constructor() {
        super();

        this.state = {
            position: window.pageYOffset
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    static propTypes = {
        children: PropTypes.func.isRequired
    }

    handleScroll = (event) => {
        const position = Math.floor(event.target.scrollingElement.scrollTop);
        this.setState({ position });
    }

    render() {
        return this.props.children(this.state.position);
    }
}