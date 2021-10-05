import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

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
      <h1 className={this.state.clicked ? "clicked" : null } onClick={this.handleClick}>
        Hello, {this.props.name}
      </h1>
    );
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}
