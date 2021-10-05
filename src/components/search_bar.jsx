import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
    if (event.target.value === '') {
      this.props.selectFunction('');
    }
  }

  render() {
    return(
      <input type="text" className="form-control form-search"
      onChange={this.handleUpdate} />
    );
  }
}

export default SearchBar;
