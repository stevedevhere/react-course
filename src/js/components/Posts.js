import React from 'react';

import Post from '../components/Post';
import AddPost from './AddPost';
import Header from '../components/Header';

import {addPost} from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

@connect(
    (state) => ({posts: state.posts}),
    dispatch => ( bindActionCreators({ addPost }, dispatch) )
)
export default class Posts extends React.Component {

    renderPosts() {
        if(this.props.posts) {
            return this.props.posts.map((item, index) => {
                // Тут мы перебираем функцией .map() каждый объект из массива переданого в этот компонент и передаем
                // каждый из них в новый компонент Post (экземпляр класса), который создается при каждой итерации функции map()

                // Так-же, мы передаем свойство "key", оно необходимо ядру реакта для индетификации элементов которые
                // созданы спомощью итерационных функций, в остальных случаях это делать нет необходимости.
                return (
                    <Post data={item} key={index} index={index} />
                )
            })
        } else {
            return <p>Empty yet, or something was wrong.</p>
        }
    }

    render() {
        return (
            <section className="posts-container">
                <Header />

                <AddPost addPost={this.props.addPost} />
                <div className="items">
                    {this.renderPosts()}
                </div>
            </section>
        )
    }
}

