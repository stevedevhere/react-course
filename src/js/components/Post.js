import React from 'react';

const Post = props => (
    <article className="item">
        <h1>{props.data.title}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eos iste praesentium repellat rerum, soluta!</p>
        <button>Show more</button>
    </article>
);

export default Post;
