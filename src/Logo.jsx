/* eslint  no-unused-vars: 0 */
import React, { Component } from 'react';

require('./index.css');

class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div clasName="Container">
        <img src="https://duckduckgo.com/assets/logo_homepage.normal.v108.svg" alt="" href={window.scrollTo(0, 250)} className="mainLogo" />

        <span className="tag">conocer más</span>
      </div>
    );
  }
}

export default Logo;
