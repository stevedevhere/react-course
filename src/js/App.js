import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';

export default class App extends React.Component {
    
    state = {
        data: FAKE_DATA
    }

    handleAddTodo = (todo) => {
        this.setState({ data: [ todo, ...this.state.data ] })
    }

    handleComplete = (index) => {
        this.setState({ data: this.state.data.map((item, i) => {
            if(index === i) return {...item, completed: !item.completed}
            return item; 
        }) })
    }

    handleDelete = (index) => {
        this.setState({ data: this.state.data.filter((item, i) => i !== index) })
    }

    render() {
        return (
            <div className="wrapper">
                <h1>My todo list!</h1>

                <AddTodo addTodo={this.handleAddTodo} />

                <TodoList>
                    {this.state.data.map((item, i) => 
                        <TodoItem key={i} 
                            index={i} 
                            data={item} 
                            complete={this.handleComplete} 
                            delete={this.handleDelete} />)}
                </TodoList>
            </div>
        )
    }
}


const FAKE_DATA = [
    { title: 'Выучить реакт', descr: '1 Description for this todo!', completed: true },
    { title: 'Выучить redux', descr: 'https://iamakulov.com/talks/redux-in-real-life/', completed: false },
    { title: 'Выучить router', descr: '3 Description for this todo!', completed: false },
]