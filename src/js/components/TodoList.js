import React, {Children} from 'react';
import TodoItem from './TodoItem';
import {connect} from 'react-redux';

const mapStateToProps = state => ({data: state.todos.data});
 
@connect(mapStateToProps)
export default class TodoList extends React.Component {
    
    render() {
        return (
            <div className="todo-list">
                {this.props.data.map((item,i)=>
                    <TodoItem key={i} 
                        data={item}
                        index={i} />
                )}
            </div>
        )
    }
}