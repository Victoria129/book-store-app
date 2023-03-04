import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserTie } from 'react-icons/fa';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/books',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];
  return (
    <nav className="navBar">
      <span>
        Bookstore CMS
      </span>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <span>
        <FaUserTie />
      </span>
    </nav>
  );
};
export default Navbar;
