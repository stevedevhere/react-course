import React from 'react';

import Post from '../components/Post';
import AddPost from './AddPost';
import Header from '../components/Header';

//import {addPost} from '../actions';
//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

//const mapStateToProps = state => {
//    return {posts: state.posts}
//};
//
//const mapDispatchToProps = dispatch => {
//    return bindActionCreators({ addPost }, dispatch);
//};
//
//@connect( mapStateToProps, mapDispatchToProps )
export default class Posts extends React.Component {

    renderPosts() {
        if(this.props.posts) {
            return this.props.posts.map((item, index) => {
                // Тут мы перебираем функцией .map() каждый объект из массива переданого в этот компонент и передаем
                // каждый из них в новый компонент Post (экземпляр класса), который создается при каждой итерации функции map()

                // Так-же, мы передаем свойство "key", оно необходимо ядру реакта для индетификации элементов которые
                // созданы спомощью итерационных функций, в остальных случаях это делать нет необходимости.
                return (
                    <Post data={item} key={index} index={index} push={this.props.history.push} />
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

                {/* Компоненту AddPost чего-то нехватает, выясните чего и решите проблему! */}
                <AddPost />
                <div className="items">
                    {this.renderPosts()}
                </div>
            </section>
        )
    }
}

