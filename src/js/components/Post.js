import React from 'react';

String.prototype.lessThan = function (max) {
    let tmp = this;
    for(let i = this.length; i >= max; i--) {
        tmp = tmp.slice(0, -1);
    }
    return tmp;
};

export default class Post extends React.Component {

    state = {
        contentToggler: true
    };

    handleShowMore = () => {
        this.setState({ contentToggler: !this.state.contentToggler })
    };

    contentView = (content) => {
        if(this.state.contentToggler) {
            return content.lessThan(120) + '... ';
        } else {
            return content;
        }
    };

    handleDelete() {
        // нам нужно удалить пост. но так как все посты хранятся в redux - нам нужно
        // написать функцию, которая сделает запрос в store, и изменит там данные.
        // Как именно это реализовать - можно узнать

    }
    handleUpdate() {
        // А тут я даже коментировать не буду, дерзайте.

    }

    render() {

        return (
            <article className={this.state.contentToggler ? "item" : "item active"}>
                <h1>{this.props.data.title}</h1>
                <p>{this.contentView(this.props.data.description)}</p>
                <button onClick={this.handleShowMore}>Show more</button>
                <button>Delete</button>
                <button>Update</button>
            </article>
        );
    }

}

