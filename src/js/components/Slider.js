import React, {Component, Children} from 'react';

export default class Slider extends Component {
    constructor(props) {
        super(props);
        // this.timer = null;
        this.state = {
            currentIndex: 0
        }

        // this.updateCurrentIndex = this
    }
    updateCurrentIndex() {
        // console.log(Children.count(this.props.children))
        let self = this;
        this.timer = setTimeout(() => {
            self.setState({
                currentIndex: self.state.currentIndex < Children.count(this.props.children)-1
                    ? self.state.currentIndex+1 
                    : 0})
        }, 1500)
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
                {Children.toArray(this.props.children)[this.state.currentIndex]}
            </div>
        )
    }
} 