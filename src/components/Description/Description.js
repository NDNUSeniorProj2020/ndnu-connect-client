import React, { Component } from 'react';
import './Description.css';
export default class Description extends Component {
  render() {
    return (
      <view style={{flex:1, flexDirection:'row'}}>
      
      <div className="description description-container">
        { this.props.children }
        <h1 className="header">Welcome to NDNU Connect</h1>
        <div className= "info-container">
          <p>NDNU Connect is a tool for students to connect with tutors as well as NDNU's Alumni</p>
        </div>
      </div>
      </view>
    )
  }
}
