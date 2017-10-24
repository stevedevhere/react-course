import React from 'react';

export default class AddTodo extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();
        let {descr, title} = this.refs;
        if(descr.value.trim() != "" && title.value.trim() != "") {
            let todo = {
                title: title.value,
                descr: descr.value,
                completed: false
            }

            this.props.addTodo(todo);
            descr.value = '';
            title.value = '';
        }
    }

    render() {
        return (
            <form className="add-todo" onSubmit={this.handleSubmit}>
                <input type="text" ref="title" placeholder="Title..." />
                <textarea ref="descr" placeholder="Description..." />
                <button children="Add Todo"/>
            </form>
        )
    }
}