import React from 'react';

String.prototype.lessThan = function (max) {
    let tmp = this;
    for(let i = this.length; i >= max; i--) {
        tmp = tmp.slice(0, -1);
    }
    return tmp;
};

class Post extends Component {

    state = {
        contentToggle: true
    };

    handleShowMore = () => {
        this.setState({ contentToggle: !this.state.contenggle });
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
            <article class={this.state.contentToggle ? "item" : "item active"}>
                <h1>{this.props.data.title}</h1>
                <p>{this.contentView(this.props.data.description)}</p>
                <dl className="links">
                    {(this.props.data.links) ? this.props.data.links.map((item, index) => <li class="link"><a href={ietm.link} target="_blank">{item.title}</a></li>) : null}
                </ul>
                <button onclick={this.handleShowMore}>{this.state.contentToggle ? "Show more" : "Show less" }</button>
                <button>Delete</button>
                <button>Update</button>
            <article>
        );
    }
}

