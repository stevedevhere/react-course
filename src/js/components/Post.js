import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateContentToggler} from '../actions';
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
    handleShowMore = () => {
        this.props.updateContentToggler(this.props.index);
        // this.setState({ contentToggle: !this.state.contentToggle });
    };

    contentView = (content) => {
        if(!this.props.data.contentToggle && content.length > 120) {
            return content.lessThan(200) + '... ';
        } else {
            return content;
        }
    };

    render() {
        return (
            <article className={this.props.data.contentToggle ? "item active" : "item"}>
                <h1>{this.props.data.title}</h1>
                <p>{this.contentView(this.props.data.description)}</p>
                <ul className="links">
                    {(this.props.data.links) ? this.props.data.links.map((item, index) =>
                        <li key={index} className="link"><a href={item.link} target="_blank">{item.title}</a></li>) : null}
                </ul>
               <div className="buttons">
                    <button onClick={this.handleShowMore}>{this.props.data.contentToggle ? "Show more" : "Show less"}</button>
                    <button >Delete</button>
                    <button>Edit</button>
                    <button onClick={() => this.props.push(`/post-${this.props.index}`)}>
                        View
                    </button>
               </div>
            </article>
        );
    }
}

