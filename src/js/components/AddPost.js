import React from 'react';

export default class AddPost extends React.Component {

    constructor(props) {
        super(props);

        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnSubmit(event) {
        event.preventDefault();

        if(this.title.refs.value.trim() !== '' || this.description.refs.value.trim() !== '') {
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