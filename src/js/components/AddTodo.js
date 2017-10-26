import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const addTodo = (data) => ({type: "ADD_TODO", todo: data})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addTodo }, dispatch);
}

@connect(null, mapDispatchToProps)
export default class AddTodo extends React.Component {
    
    handleAddTodo = (event) => {
        event.preventDefault();
        let {title, descr} = this.refs;
        
        if(title.value.trim() != "" && descr.value.trim() != "") {
            let todo = {
                title: title.value,
                descr: descr.value
            }
            
            // this.props.dispatch({type: "ADD_TODO", todo});
            this.props.addTodo(todo);
            // this.props.addTodo(todo);

            title.value = '';
            descr.value = '';
        }

    }

    render() {
        // console.log(this)
        return (
            <form className="add-todo" onSubmit={this.handleAddTodo} >
                <input type="text" ref="title" placeholder="Title..." />
                <textarea ref="descr" placeholder="Description here..." />
                <button type="submit" children="Add Todo" />
            </form>
        )
    }
}

// export default withRouter(AddTodo);