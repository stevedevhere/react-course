import React from 'react';
import {connect} from 'react-redux';
import {addPost} from '../actions';
import Notify from './Notify';

@connect(null, {addPost})
export default class AddPost extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            notify: false
        }
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.unmountNotify = this.unmountNotify.bind(this);
    }

    handleOnSubmit(e) {
        e.preventDefault();

        if(this.title.value.trim() !== '' || this.description.value.trim() !== '') {
            let new_post = {
                title: this.title.value,
                description: this.description.value
            };

            this.props.addPost(new_post);
            this.setState({notify: true});
        }
    };

    componentDidUpdate() {
        this.title.value = '';
        this.description.value = '';
    }

    unmountNotify() {
        this.setState({notify: false});
    }

    // componentWillUnmount() {
    //     this.setState({notify: false});
    // }

    render() {
        return (
            <div className="add-post">
                { this.state.notify ? <Notify title={this.title.value} unmount={this.unmountNotify} /> : null }
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