import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (event) => {
    this.props.selectClick(this.props.id);
  }

  render() {
    const src = `https://media3.giphy.com/media/${this.props.id}/giphy.gif`;
    if (!this.props.id) {
      return null;
    }
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
