import React, { Component } from 'react';

export default class adminHomePage extends Component {
  render() {
    return (

      <div className="base-container" ref={this.props.containerRef}>
      <div className="header">admin Homepage</div>
      <div className="content">
        <div className="form">
          <div className="footer"></div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn">
          Login
        </button>
      </div>
    </div>
    );
  }
}

