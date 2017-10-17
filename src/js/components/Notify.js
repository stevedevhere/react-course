import React, {Component} from 'react';

export default class Notify extends Component {
    
    // componentWillUnmount() {
    //     console.log('notify unmounted');
    // }

    componentDidMount() {
        setTimeout(this.props.unmount, 1300);
    }

    render() {
        return <div className="notify">The post "{this.props.title}" was successfuly created.</div>
    }

}