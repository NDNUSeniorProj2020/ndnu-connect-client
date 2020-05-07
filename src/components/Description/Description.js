import React from 'react';

import './Description.css';

export default function Description({ children }) {
  return (
    <div className="description description-container">
      { children }
      <h1 className="header">Welcome to NDNU Connect</h1>
      <div className= "info-container">
        <p>&nbsp;&nbsp;Notre Dame de Namur University (NDNU) Connect is an application that connects students, tutors and alumni on one platform.
        NDNU Connect is a React-Django web application that allows past and present students of the university
        to connect and assist each other in their academic journeys and present career opportunities.
        It also serves as a one stop shop in order to help place students into internships and to help current students with career guidance.
        </p>
      </div>
    </div>
  )
}
