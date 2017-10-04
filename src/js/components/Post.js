import React from 'react';

// Link - необходим для того чтобы переключатся между "страницами", по факту - аналог
// обычного <a>, но работает с помощью BrowserHistory или hashHistory
// вместо привычного нам href нужно писать to={`/some-url`}
import {Link} from 'react-router-dom';


String.prototype.lessThan = function (max) {
    let tmp = this;
    for(let i = this.length; i >= max; i--) {
        tmp = tmp.slice(0, -1);
    }
    return tmp;
};


export default class Post extends React.Component {

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
        return (
            <article className={this.state.contentToggle ? "item" : "item active"}>
                    <h1>{this.props.data.title}</h1>
                    <p>{this.contentView(this.props.data.description)}</p>
                    <ul className="links">
                        {(this.props.data.links) ? this.props.data.links.map((item, index) =>
                            <li key={index} className="link"><a href={item.link} target="_blank">{item.title}</a></li>) : null}
                    </ul>
                    <button onClick={this.handleShowMore}>{this.state.contentToggle ? "Show more" : "Show less" }</button>
                    <button>Delete</button>
                    <button>Edit</button>
                <Link to={`/post-${this.props.index}`} className="post-view-link">
                    View
                </Link>
            </article>
        );
    }
}

