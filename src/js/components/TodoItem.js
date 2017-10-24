import React from 'react';

export default class TodoItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleComplete = this.handleComplete.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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
            <div className={!data.completed ? "item" : "item completed"}>
                <h2>{data.title}</h2>
                <p>{data.descr}</p>
                <div className="buttons">
                    <button onClick={this.handleComplete} children={data.completed ? "undo" : "done" }/>
                    <button onClick={this.handleDelete} children="delete"/>
                </div>
            </div>
        )        
    }
}