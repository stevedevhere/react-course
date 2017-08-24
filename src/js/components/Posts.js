import React from 'react';
import Post from '../components/Post';

export default class Posts extends React.Component {

    render() {
        return (
            <section className="posts-container">
                <h2>Posts</h2>
                <div className="items">
                    {this.props.posts.map((item, index) => {
                        // Тут мы перебираем функцией .map() каждый объект из массива переданого в этот компонент и передаем
                        // каждый из них в новый компонент Post (экземпляр класса), который создается при каждой итерации функции map()

                        // Так-же, мы передаем свойство "key", оно необходимо ядру реакта для индетификации элементов которые
                        // созданы спомощью итерационных функций, в остальных случаях это делать нет необходимости.
                        return (
                            <Post data={item} key={index} />
                        )
                    } )}
                </div>
            </section>
        )
    }
}
