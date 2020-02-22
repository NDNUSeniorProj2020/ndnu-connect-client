import React from 'react';

import './Description.css';

export default function Description({ children }) {
  return (
    <div className="description description-container">
      { children }
      <h1 className="header">Welcome to NDNU Connect</h1>
      <div className= "info-container">
        <p>NDNU Connect is a tool for students to connect with tutors as well as NDNU's Alumni</p>
      </div>
    </div>
  )
}
