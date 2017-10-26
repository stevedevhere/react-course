import React from 'react';

// Мне кажется что, чтобы у нас заработало добавление, нам нужно присоединить 
// наш компонент к store и передать в компонент обернутуюю в dispatch функцию 
// результат которой попадет в reducer который это обработает....... но 
// ..но... я бы рекомендовал вам зайти в компонент в котором используется этот компонент и прочитать коментарий там

export default class AddPost extends React.Component {

    constructor(props) {
        super(props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this); 
    }

    handleOnSubmit(event) {
        event.preventDefault();

        if(this.refs.title.value.trim() !== '' || this.refs.description.value.trim() !== '') {
            let new_post = {
                title: this.refs.title.value,
                description: this.refs.description.value
            };

            this.props.addPost(new_post);

            this.refs.title.value = '';
            this.refs.description.value = '';
        }
    };

    render() {
        return (
            <div className="add-post">
                <h3>Add new post</h3>
                
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" ref="title" placeholder="Post title"/>
                    <textarea ref="description" placeholder="Post content"/>
                    <button type="submit">Создать новый пост</button>
                </form>
            </div>
        );
    }
}