import React, {Component} from 'react';

// Было бы неплохо чтобы этот компонент появлялся при 
// успешном добавлении в store нашего поста.
export default class Notify extends Component {
    componentDidMount() {
        this.timer = setTimeout(() => {
            this.props.unmount();
        }, 2500);
    }

    componentWillUnmount() {
        console.log('unmount')
    }

    render() {
        return <div className="notify">The post "{this.props.title}" was succesfully created.</div>
    }
}