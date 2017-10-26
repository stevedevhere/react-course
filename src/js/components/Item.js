import React from 'react';
import {connect} from 'react-redux';

import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    let _id = Number(ownProps.match.params.id) - 1;
    return { data: state.todos.data.find((item, i) =>  _id === i) };
}
@connect(mapStateToProps)
export default class Item extends React.Component {
    
    constructor(props) {
        super(props);

        this.handleComplete = this.handleComplete.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    static defaultProps = {
        data: {
            title: "Default", 
            descr: "default", 
            complete: false 
        }
    }

    handleComplete() {
        this.props.complete(this.props.index);
    }

    handleDelete() {
        this.props.delete(this.props.index);
    }

    render() {
        let {data} = this.props;
        return (
            <div className="item">
                <h3>{data.title}</h3>
                <p>{data.descr}</p>
            </div>
        )
    }
}

//  (Item);