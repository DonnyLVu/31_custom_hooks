import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    THIS IS THE HEADER
    <ul>
      <li>
        <Link to="/">Main Page</Link>
      </li>
    </ul>
  </div>
);

export default Header;
