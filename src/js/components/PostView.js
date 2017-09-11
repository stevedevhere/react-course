import React from 'react';
import {Link} from 'react-router-dom';

String.prototype.lessThan = function (max) {
    let tmp = this;
    for(let i = this.length; i >= max; i--) {
        tmp = tmp.slice(0, -1);
    }
    return tmp;
};

export default class PostView extends React.Component {

    state = {
        contentToggle: true
    };

    handleShowMore = () => {
        this.setState({ contentToggle: !this.state.contentToggle });
    };

    contentView = (content) => {
        if(this.state.contentToggle && content.length > 120) {
            return content.lessThan(120) + '... ';
        } else {
            return content;
        }
    };

    render() {
        console.log(this);
        return (
            <article className="post-view">
                <h1>{/*this.props.data.title*/}</h1>
                <p>{/*this.contentView(this.props.data.description)*/}</p>
                <ul className="links">
                </ul>
                <button onClick={this.handleShowMore}>{this.state.contentToggle ? "Show more" : "Show less" }</button>
                <button>Delete</button>
                <button>Update</button>
            </article>
        );
    }
}

