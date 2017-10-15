import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';


const mapStateToProps = (state, ownProps) => ({ data: state.posts.find((item, index) => index === +ownProps.id) });
@connect(mapStateToProps)
export default class PostEdit extends React.Component {
    
    componentWillUnmount() {
        console.log('component will unmount')
    }
 
    render() {
        let {data} = this.props;
        return (
            <div className="post-edit-container" onClick={this.props.unmount}>
                <div className="post-edit">
                    <form>
                        <input ref="title" type="text" defaultValue={data.title} />
                        <textarea ref="description" defaultValue={data.description}></textarea>
                    </form>
                </div>
            </div>
        )
    }
}