import React from 'react';
import { withRouter } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
  }

  handleOnKeyDown(e) {
    if (e.keyCode === 13 && this.search.value.trim() !== '') {
      this.props.history.push(`/search/${this.search.value}`); // eslint-disable-line react/prop-types
      this.search.value = '';
    }
  }

  render() {
    return (
      <input
        type="text"
        ref={(search) => { this.search = search; }}
        placeholder="Search.."
        onKeyDown={this.handleOnKeyDown}
      />
    );
  }
}

export default withRouter(Search);
