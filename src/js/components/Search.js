import React from 'react';
import {withRouter} from 'react-router';

@withRouter
export default class Search extends React.PureComponent {
    
    constructor(props) {
        super(props);

        this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    }

    handleOnKeyDown(e) {
        if(e.keyCode === 13 && this.refs.search.value.trim() != "") {
            this.props.history.push(`/search/${this.refs.search.value}`);
            this.refs.search.value = '';
        }
    }

    render() {
        return (
            <input type="text" ref="search" placeholder="Search.." onKeyDown={this.handleOnKeyDown}/>
        )
    }
}