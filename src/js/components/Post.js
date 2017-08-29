import React from 'react';

const Post = props => (
    <article className="item">
        <h1>{props.data.title}</h1>
        <p>Данные о заголове этого поста попали сюда засчет того что мы передаем их в этот компонент внутри компонента Posts.</p>
        <button>Show more</button>
    </article>
);

export default Post;
