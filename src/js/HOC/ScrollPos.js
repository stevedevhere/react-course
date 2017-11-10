import React from 'react';

export default function scrollPosHOC(WrappedComponent) {
    return class ScrollPosHOC extends React.Component {

        constructor() {
            super();
    
            this.state = {
                position: 0
            }
        }

        componentDidMount() {
            window.addEventListener('scroll', this.handleScroll);
        }
    
        componentWillUnmount() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    
        handleScroll = (event) => {
            const position = Math.floor(event.target.scrollingElement.scrollTop);
            this.setState({ position });
        }
    
        render() {
            return <WrappedComponent {...this.props} position={this.state.position} />;
        }
    }
} 