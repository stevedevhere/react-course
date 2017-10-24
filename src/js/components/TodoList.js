import React from 'react';

export default class TodoList extends React.Component {
    render() {
        return (
            <div className="todo-list">
                {this.props.children}
            </div>
        )
    }
}