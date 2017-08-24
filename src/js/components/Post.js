import React from 'react';

const Post = props => (
    <article className="item">
        <h1>{props.data.title}</h1>
        <p>Заголовки этих постов берутся из "props.data". В это свойство класса эти данные попадают засчет того
            что мы передали их в этот компонент в функции map() при создании каждого нового компонента Post.</p>
        <button>Show more</button>
    </article>
);

export default Post;
