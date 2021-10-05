import React, { Component } from 'react';

// Placed here only as early example

// Function-based component with static props
/*
const Hello = ({ name }) => {
  return (
    <div>
      Hello,
      {name}
    </div>
  );
};
*/

// Class-based component with mutable state
class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = { clicked: false };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <h1 className={this.state.clicked ? "clicked" : null} onClick={this.handleClick}>
        Hello, {this.props.name}
      </h1>
    );
  }
}
