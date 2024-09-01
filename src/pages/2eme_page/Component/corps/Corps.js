import React from 'react';
import './Corps.css';
import { Link } from 'react-router-dom';

function Corps() {
  return (
    <div className="corps">
      <Link to="/page_principale">
        <h1>Home</h1>
      </Link>
      <Link to="/section_projet">
        <h1>Projects</h1>
      </Link>
      <Link to="/contact">
        <h1>Contact</h1>
      </Link>
    </div>
  );
}

export default Corps;
