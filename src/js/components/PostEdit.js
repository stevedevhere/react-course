import React from 'react';
import {findDOMNode} from 'react-dom';

import {connect} from 'react-redux';
import {updateEditedPost} from '../actions';

const mapStateToProps = (state, ownProps) => ({ data: state.posts.find((item, index) => index === Number(ownProps.id) ) });
@connect(mapStateToProps, { updateEditedPost })
export default class PostEdit extends React.Component {
    
    constructor(props) {
        super(props);

        this.saveAndClose = this.saveAndClose.bind(this);
    }

    stopPropagation(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }

    saveAndClose() {
        let updated = {
            title: this.refs.title.value,
            description: this.refs.description.value
        }

        this.props.updateEditedPost(updated, this.props.id);
        this.props.unmount();
    }

    componentWillUnmount() {
        document.title = "Simple react blog";
    }

    componentDidMount() {
        document.title = "Editing the post: " + this.props.data.title;
        findDOMNode(this.refs.title).focus();
    }

    render() {
        let {title, description} = this.props.data;
        description = description.split(" ").filter(letter => letter.trim() != "" && letter.length).join(" ").replace(/(\r\n|\n|\r|)/gm, "").toString();
        
        return (
            <div className="post-edit-container" onClick={this.props.unmount}>
                <div className="post-edit" onClick={this.stopPropagation}>
                    <input ref="title" type="text" defaultValue={title} />
                    <textarea ref="description" defaultValue={description}></textarea>
                    <button onClick={this.saveAndClose}>Save & Close</button>
                </div>
            </div>
        )
    }
}