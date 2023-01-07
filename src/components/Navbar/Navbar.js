import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav">
    <header>
      <h1>Bookstore CMS</h1>
    </header>

    <NavLink to="/">
      Book
    </NavLink>
    <NavLink to="/categories">
      Categories
    </NavLink>
  </nav>
);

export default Navbar;
