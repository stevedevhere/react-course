import React from 'react';

const Post = props => (
    <article className="item">
        <h1>{props.data.title}</h1>
        <p>Данные о заголове этого поста попали сюда засчет того что мы передаем их в этот компонент внутри компонента Posts.</p>
        <div className="buttons">
            <button>Show more</button>
        </div>
    </article>
);

export default Post;
