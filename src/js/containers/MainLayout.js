import React from 'react';

import Header from '../components/Header';
import Posts from '../components/Posts';
import Post from '../components/Post';
import PostView from '../components/PostView';

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
        // нам нужно удалить пост. но так как все посты хранятся в state - нам нужно
        // его менять.

    }

    handleUpdate() {
        // Ну вы поняли.. )

    }

    render() {
        return (
            <div className="wrapper">
                <h1>React Lesson: 3 [ router, redux ]</h1>
                <Header />
                {/*<Posts posts={this.state.posts} addPost={this.handleAddPost}/>*/}

                <Switch>
                    <Route exact path="/" component={Posts}/>
                    <Route path="/post-:postId" component={PostView}/>
                </Switch>

            </div>
        );
    }
}

