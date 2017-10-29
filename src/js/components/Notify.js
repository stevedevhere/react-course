import React, {Component} from 'react';

export default class Notify extends Component {
    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    
    componentDidMount() {
        this.timer = setTimeout(this.props.unmount, 3000);
    }

    render() {
        return <div className="notify">The post "{this.props.title}" was successfuly created.</div>
    }

}