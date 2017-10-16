import React from 'react';
import ReactDOM from 'react-dom';

import {connect} from 'react-redux';
import {updateEditedPost} from '../actions';

const mapStateToProps = (state, ownProps) => ({ data: state.posts.find((item, index) => index === +ownProps.id) });
@connect(mapStateToProps, { updateEditedPost })
export default class PostEdit extends React.Component {
    
    componentWillUnmount() {
        console.log('component will unmount')
    }

    saveAndClose = () => {
        let updated = {
            title: this.refs.title.value,
            description: this.refs.description.value
        }

        this.props.updateEditedPost(updated, this.props.id);
    }
    
    stopPropagation(e) {
        e.stopPropagation(); 
        e.nativeEvent.stopImmediatePropagation();
    }

    render() {
        let {data} = this.props;
        return (
            <div className="post-edit-container" onClick={this.props.unmount}>
                <div className="post-edit" onClick={this.stopPropagation}>
                    <input ref="title" type="text" defaultValue={data.title} />
                    <textarea ref="description" defaultValue={data.description}></textarea>
                    <button onClick={this.saveAndClose}>Save & Close</button>
                </div>
            </div>
        )
    }

    componentDidMount() {
        document.title = "Edit post => " + this.props.data.title;
    }
}