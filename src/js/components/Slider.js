import React, {PureComponent, Children} from 'react';
import Particles from 'react-particles-js';

export default class Slider extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.currentIndex !== nextState.currentIndex) {
            return true
        } else {
            return false;
        }
    }

    updateCurrentIndex() {
        let self = this;
        this.timer = setTimeout(() => {
            self.setState({
                currentIndex: self.state.currentIndex < Children.count(this.props.children)-1
                    ? self.state.currentIndex+1
                    : 0})
        }, 2700)
    }

    componentDidMount() {
        this.updateCurrentIndex();
    }

    componentDidUpdate() {
        this.updateCurrentIndex();
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        return (
            <div className="slider-container">
                <div className="slider-content">
                    {Children.toArray(this.props.children)[this.state.currentIndex]}
                </div>
                <Particles height="450px" params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#fff",
            					blur: 1
                            },
                        },
                        size: {
                            value: 2
                        }
            		}
            	}} style={{backgroundColor: '#f3ef18'}} />
            </div>
        )
    }
} 