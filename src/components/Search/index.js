import React from 'react';
import { withRouter } from 'react-router';
import { debounce } from 'lodash';
import s from './styles';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
  }

  handleOnKeyDown() {
    if (this.search.value.trim() !== '') {
      this.props.history.push(`/search/${this.search.value}`); // eslint-disable-line react/prop-types
    } else this.props.history.push('/'); // eslint-disable-line react/prop-types
  }

  render() {
    return (
      <input
        className={s.search()}
        type="text"
        ref={(search) => { this.search = search; }}
        placeholder="Search.."
        onKeyDown={debounce(this.handleOnKeyDown, 450)}
      />
    );
  }
}

export default withRouter(Search);
