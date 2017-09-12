import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {}
};
const mapStateToProps = (state, ownProps) => {
    return { data: state.posts.find((item, index) => +index === +ownProps.match.params.postId) }
};
@connect(mapStateToProps, mapDispatchToProps)
export default class PostView extends React.Component {

    render() {
        return (
            <article className="post-view">
                <h1>{this.props.data.title}</h1>
                <Link to="/" className="go-home">Go Home</Link>
                <p>{this.props.data.description}</p>
                <ul className="links">
                    {this.props.data.links.map((item, index) => <li key={index}><a href={item.link}>{item.title}</a></li>)}
                </ul>
                <button>Delete</button>
                <button>Edit</button>
            </article>
        );
    }
}

