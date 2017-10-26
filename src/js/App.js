import React from 'react';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import Item from './components/Item';

import { Route, Link, Switch } from 'react-router-dom';

export default class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <h1>TodoApp</h1>

                <Link to="/" children="Home"/>
                <Link to="/add" children="Add"/>

                <Switch>
                    <Route exact path="/" component={TodoList} />
                    <Route path="/add" component={AddTodo}/>
                    <Route path="/item:id" component={Item} />
                </Switch>
            </div>
        )
    }
}
