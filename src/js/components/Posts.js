import React from 'react';

import Post from '../components/Post';
import AddPost from './AddPost';

export default class Posts extends React.Component {

    // lifecycle methods !

    comopnentWillMount() {
        console.log("Component Will Mount | Posts.js")
    }

    componentDidMount() {
        console.log("Component Did Mount | Posts.js")
    }

    componentWillUpdate() {
        console.log("Component Will Update | Posts.js");
    };

    componentDidUpdate() {
        console.log("Component Did Update | Posts.js");
    };

    componentSillUnmount() {
        console.log("componentWillUnmount | Posts.js");
    }

    componentWillReceiveProps(nextProps) {
        console.log("Component Will Receive Props | Posts.js", nextProps);
    }

    //lifecycle methods ends here ~~~

    render() {
        return (
            <section className="posts-container">
                <AddPost addPost={this.props.addPost} />
                <div class="items">
                    {this.props.posts.map(item => {
                        return (
                            <Post data=item />
                        )
                    } )}
                </div>
            </section>
        )
    }
}

