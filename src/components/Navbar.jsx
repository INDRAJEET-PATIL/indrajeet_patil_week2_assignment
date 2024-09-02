import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add Entry</Link></li>
        <li><Link to="/entries">View Entries</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
