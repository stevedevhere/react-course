import React from 'react';
import ReactDOM from 'react-dom';

import Post from '../components/Post';
import AddPost from './AddPost';
import Header from '../components/Header';
import PostEdit from '../components/PostEdit';


import { addPost, updateContentToggler, deletePost } from '../actions';

// Функция connect является связующим между компонентом и store из redux,
// эта функция принимает два параметра:
// 1. функция, в которую аргументом приходит state из store, которая возвращает объект, в котором
//    мы должны указать какие данные хотим получить в своем компоненте
// 2. функция, которая должна вернуть ваши actions, которые в дальнейшем тоже попадут в свойства компонента который оборачиваете.
import { connect } from 'react-redux';

// Это специальная функция которая все полученые в объекте actions будет оборачивать в функцию dispatch,
// это нужно для того чтобы вызывая свои actions вы не просто получали объект, а обращались с ним в глобальный store,
// где с помощью reducers будет идти обработка этого action'a
import { bindActionCreators } from 'redux';

// mapStateToProps - выбираем какие данные нам нужны из store, которые в дальнейшем запишутся в props
// компонента который мы оборачиваем.
const mapStateToProps = state => ({ posts: state.posts });

// mapDispatchToProps - передаем все нужные нам actions в оборачеваемый компонент, но перед этим оборачиваем
// все actions в функцию dispatch
const mapDispatchToProps = dispatch => ( bindActionCreators({ addPost, updateContentToggler, deletePost }, dispatch) );

// @connect - "@" - обозначает декоратор, это es7. Функция "connect" декорирует объект, имеется ввиду что на
// выходе мы получаем новый, измененный компонент который содержит в себе дополнительные функции и свойства,
// а какие именно - мы определяем в функциях передаваемых внутрь функции connect.
@connect(mapStateToProps, mapDispatchToProps)
export default class Posts extends React.Component {

    constructor(props) {
        super(props);

        this.postEditFormUnmount = this.postEditFormUnmount.bind(this);
        this.postEditForm = this.postEditForm.bind(this);
        this.renderPosts = this.renderPosts.bind(this);
    }

    state = {
        editedID: null,
        edit: false
    }

    postEditForm(id) {
        if(id) this.setState({editedID: id, edit: !this.state.edit});
        else return null;
    }
    
    renderPosts() {
        if(this.props.posts) {
            let self = this;
            return this.props.posts.map((item, index) => {
                // Тут мы перебираем функцией .map() каждый объект из массива переданого в этот компонент и передаем
                // каждый из них в новый компонент Post (экземпляр класса), который создается при каждой итерации функции map()

                // Так-же, мы передаем свойство "key", оно необходимо ядру реакта для индетификации элементов которые
                // созданы спомощью итерационных функций, в остальных случаях это делать нет необходимости.
                return (
                    <Post data={item}
                        key={index}
                        index={index}
                        updateContentToggler={self.props.updateContentToggler}
                        push={self.props.history.push}
                        edit={self.postEditForm}
                        delete={self.props.deletePost} />
                )
            })
        } else {
            return <p>Empty yet, or something was wrong.</p>
        }
    }

    postEditFormUnmount() {
        this.setState({edit: false});
    }

    componentDidMount() {
        document.title = "Simple react blog";
    }

    render() {
        return (
            <section className="posts-container">
                { this.state.edit ? <PostEdit ref="modal" id={this.state.editedID} unmount={this.postEditFormUnmount}/> : null }
                <Header />

                <AddPost addPost={this.props.addPost} />
                {/*<Menu/>!*/}
                <div className="items">
                    {this.renderPosts()}
                </div>
            </section>
        )
    }
}

