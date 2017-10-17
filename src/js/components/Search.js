import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {searchPost} from '../actions';
@connect(null, {searchPost})
export default class Search extends React.Component {
    
    constructor(props) {
        super(props);

        this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    }

    handleOnKeyDown(e) {
        if(e.keyCode === 13 && this.refs.search.value.trim() != "") {
            this.props.searchPost();
            // this.props..push('/');
            // this.context.search(this.refs.search.value);
        }
    }

    render() {
        return (
            <input type="text" ref="search" placeholder="Search.." onKeyDown={this.handleOnKeyDown}/>
        )
    }
}