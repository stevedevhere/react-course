import React from 'react';

import Posts from '../components/Posts';
// import Post from '../components/ Post';
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

    }

    handleUpdate() {

    }

    render() {
        return (
            <div className="wrapper">

                <Switch>
                    <Route exact path="/" component={Posts}/>
                    <Route path="/post-:postId" component={PostView}/>
                </Switch>

            </div>
        );
    }
}

