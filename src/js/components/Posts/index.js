/* global document */

import React from 'react';
import uuid from 'uuid';

// Декоратор, нужен для того чтобы в нашем компоненте была возможность использовать функции роутера.
import { withRouter } from 'react-router';

// Функция connect является связующим между компонентом и store из redux,
// эта функция принимает два параметра:
// 1. функция, в которую аргументом приходит state из store, которая возвращает объект, в котором
//    мы должны указать какие данные хотим получить в своем компоненте
// 2. функция, которая должна вернуть ваши actions, которые в дальнейшем тоже попадут в свойства
// компонента который оборачиваете.
import { connect } from 'react-redux';

// Это специальная функция которая все полученые в объекте actions будет оборачивать
// в функцию dispatch, это нужно для того чтобы вызывая свои actions вы не просто
// получали объект, а обращались с ним в глобальный store, где с помощью reducers
// будет идти обработка этого action'a
import { bindActionCreators } from 'redux';

import Post from '../../components/Post';
import PostEdit from '../../components/PostEdit';

import { addPost, updateContentToggler, deletePost } from '../../actions';
import s from './styles';

// mapStateToProps - выбираем какие данные нам нужны из store, которые в
// дальнейшем запишутся в props компонента который мы оборачиваем.
const mapStateToProps = (state, ownProps) => {
  const search = ownProps.match.params.search;
  return {
    posts: search
      ? state.posts.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
      : state.posts
  };
};

// mapDispatchToProps - передаем все нужные нам actions в оборачеваемый
// компонент, но перед этим оборачиваем все actions в функцию dispatch
const mapDispatchToProps = dispatch => bindActionCreators({
  addPost,
  updateContentToggler,
  deletePost
}, dispatch);

// @connect - "@" - обозначает декоратор, это es7. Функция "connect" декорирует объект,
// имеется ввиду что на выходе мы получаем новый, измененный компонент который
// содержит в себе дополнительные функции и свойства, а какие именно - мы определяем в
// функциях передаваемых внутрь функции connect.


class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editedID: null,
    };

    this.handleEditFormUnmount = this.handleEditFormUnmount.bind(this);
    this.postEditForm = this.postEditForm.bind(this);
    this.renderPosts = this.renderPosts.bind(this);
  }

  componentDidMount() {
    document.title = 'Simple react blog';
  }

  postEditForm(id) {
    if (id) this.setState({ editedID: id });
    return null;
  }

  handleEditFormUnmount() {
    this.setState({ editedID: null });
  }

  renderPosts() {
    if (this.props.posts) {
      const self = this;
      let error = null;
      const { posts } = this.props;
      const { search } = this.props.match.params;
      if (!posts.length && search) error = 'No posts find, sorry, try another request.';
      else if (!posts.length) error = 'No posts yet, you can create a new or wait.';
      if (!error) {
        return this.props.posts.map((item, index) => {
          if (typeof item === 'string') {
            return <p key={uuid.v4()}>Error: {item}</p>;
          }

          // Тут мы перебираем функцией .map() каждый объект из массива переданого в
          // этот компонент и передаем каждый из них в новый компонент Post (экземпляр класса),
          // который создается при каждой итерации функции map()

          // Так-же, мы передаем свойство "key", оно необходимо ядру реакта
          // для индетификации элементов которые созданы спомощью итерационных функций,
          // в остальных случаях это делать нет необходимости.

          return (
            <Post
              data={item}
              key={uuid.v4()}
              index={index}
              updateContentToggler={self.props.updateContentToggler}
              push={self.props.history.push}
              edit={self.postEditForm}
              delete={self.props.deletePost}
            />
          );
        });
      }
      return <p>Error: {error}</p>;
    }
    return null;
  }

  render() {
    return (
      <section>
        {this.state.editedID && (
          <PostEdit
            id={this.state.editedID}
            unmount={this.handleEditFormUnmount}
          />
        )}

        <div className={s.posts()}>
          {this.renderPosts()}
        </div>
      </section>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts));
