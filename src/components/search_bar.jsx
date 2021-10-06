import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  handleUpdate = (event) => {
    this.setState({ term: event.target.value });
    this.props.searchFunction(event.target.value);
    if (event.target.value === '') {
      this.props.selectFunction('');
    }
  }

  render() {
    return(
      <input type="text" className="form-control form-search"
      value={this.state.term}
      onChange={this.handleUpdate} />
    );
  }
}

export default SearchBar;
