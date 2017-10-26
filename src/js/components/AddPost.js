import React from 'react';

export default class AddPost extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnSubmit(e) {
        e.preventDefault();

        if(this.title.value.trim() !== '' || this.description.value.trim() !== '') {
            let new_post = {
                title: this.title.value,
                description: this.description.value
            };

            this.props.addPost(new_post);

            this.title.value = '';
            this.description.value = '';
        }
    };

    render() {
        return (
            <div className="add-post">
                <h3>Add new post</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" ref={instance => this.title = instance} placeholder="Post title"/>
                    <textarea ref={instance => this.description = instance} placeholder="Post content"/>
                    <button type="submit">Создать новый пост</button>
                </form>
            </div>
        );
    }
}