import React, { Component } from 'react';
import './App.css';

export default class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;

    return (
      <div className="background">{children}</div>
    );
  }
}
