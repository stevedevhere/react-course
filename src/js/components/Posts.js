import React from 'react';
import Post from '../components/Post';

export default class Posts extends React.Component {

    render() {
        return (
            <section className="posts-container">
                <h2>Posts</h2>
                <div className="items">
                    {this.props.posts.map((item, index) => <Post key={index} data={item} /> )}
                </div>
            </section>
        )
    }
}
