import React from 'react';

import Posts from '../components/Posts';
import PostView from '../components/PostView';


// Route - компонент принимающий два свойства:
// 1. path - url
// 2. component - компонент который отобразиться по указаному в path url.
// так-же присуствует возможность делать компонент парным, что дает возможность
// вкладывать в него другие теги и компоненты.

// Switch - вспомогательный компонент который позволяет групировать определенные
// Routes и переключаться между ними

// Link - необходим для того чтобы переключатся между "страницами", по факту - аналог
// обычного <a>, но работает с помощью BrowserHistory или hashHistory
// вместо привычного нам href нужно писать to={`/some-url`}

import { Route, Switch, Link } from 'react-router-dom';

export default class MainLayout extends React.Component {

    constructor(props) {
        super(props);
            this.handleAddPost = this.handleAddPost.bind(this);
    }

    handleAddPost(post) {
        this.setState({ posts: [ ...this.state.posts, post ] })
    }

    handleDelete() {

    }

    handleUpdate() {

    }

    render() {
        return (
            <div className="wrapper">

                <Switch>
                    <Route exact path="/" component={Posts}/>
                                        
                    <Route render={() => <div>Page Not Found</div>}/>
                </Switch>

            </div>
        );
    }
}

