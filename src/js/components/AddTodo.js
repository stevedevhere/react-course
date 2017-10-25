import React from 'react';

export default class AddTodo extends React.Component {
    
    handleAddTodo = (event) => {
        event.preventDefault();
        let {title, descr} = this.refs;
        
        if(title.value.trim() != "" && descr.value.trim() != "") {
            let todo = {
                title: title.value,
                descr: descr.value
            }

            this.props.addTodo(todo);

            title.value = '';
            descr.value = '';
        }

    }

    render() {
        return (
            <form className="add-todo" onSubmit={this.handleAddTodo} >
                <input type="text" ref="title" placeholder="Title..." />
                <textarea ref="descr" placeholder="Description here..." />
                <button type="submit" children="Add Todo" />
            </form>
        )
    }
}