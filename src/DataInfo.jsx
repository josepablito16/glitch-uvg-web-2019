import React, { Component } from 'react';

export default class DataInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ol>
        <li>Block advertising trackers.</li>
        <li>Keep your search history private</li>
        <li>Take control of your personal data.</li>
      </ol>
    );
  }
}
