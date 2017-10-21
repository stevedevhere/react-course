import React from 'react';

import Post from '../components/Post';

export default class Posts extends React.Component {

    render() {
        return (
            <section className="posts-container">
                <div className="items">
                    <Post data={ {title: 'react.'} } />
                </div>
            </section>
        )
    }
}