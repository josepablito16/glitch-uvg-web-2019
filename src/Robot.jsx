import React, { Component } from 'react';

require('./cuadro.css');

export default class Robot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <img src="https://duckduckgo.com/assets/onboarding/robot-icon-frameless.svg" alt="" className="imagenRobot" />
    );
  }
}
