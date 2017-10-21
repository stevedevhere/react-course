import React from 'react';
import {findDOMNode} from 'react-dom';

import {connect} from 'react-redux';
import {addPost} from '../actions';
import Notify from './Notify';

@connect(null, {addPost})
export default class AddPost extends React.PureComponent {
    
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

        if(this.refs.title.value.trim() !== '' || this.refs.description.value.trim() !== '') {
            let new_post = {
                title: this.refs.title.value,
                description: this.refs.description.value
            };

            this.props.addPost(new_post);
            this.setState({notify: true});
        }
    };

    componentDidUpdate() {
        this.refs.title.value = '';
        this.refs.description.value = '';
    }

    componentDidMount() {
        findDOMNode(this.refs.title).focus();
    }

    unmountNotify() {
        this.setState({notify: false});
    }

    render() {
        return (
            <div className="add-post">
                { this.state.notify ? <Notify title={this.refs.title.value} unmount={this.unmountNotify} /> : null }
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