import React from 'react';

import { Link } from 'react-router-dom';

export default class Item extends React.Component {
    
    constructor(props) {
        super(props);

        this.handleComplete = this.handleComplete.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    static defaultProps = {
        data: { title: "Default", descr: "default", complete: true }
    }

    handleComplete() {
        this.props.complete(this.props.index);
    }

    handleDelete() {
        this.props.delete(this.props.index);
    }

    componentWillReceiveProps() {
        console.log(this.props);
        // this.props.fetchData(this.props.match.params.id);
    }

    render() {
        //  console.log(this.props);
        return (
            <div className="item">
                <h3>Item {this.props.match.params.id}</h3>
            </div>
        )
    }
}