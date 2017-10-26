import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export default class TodoItem extends React.Component {
    
    constructor(props) {
        super(props);

        this.handleComplete = this.handleComplete.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    static propTypes = {
        delete: PropTypes.func.isRequired
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
        console.log(this);
        let {data} = this.props;
        return (
            <div className={data.complete ? "item completed" : "item" }>
                <h2>{data.title}</h2>
                <p>{data.descr}</p>
                <div className="buttons">
                    <button children={data.complete ? "undo" : "done"} onClick={this.handleComplete} />
                    <button children="delete" onClick={this.handleDelete} />
                    <Link to={`item${this.props.index + 1}`}>View</Link>
                </div>
            </div>
        )
    }
}