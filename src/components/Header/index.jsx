import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>{' '}
          </li>
          <li>
            <NavLink to='posts'>Posts</NavLink>
          </li>
          <li>
            <NavLink to='about'>About</NavLink>
          </li>
          <li>
            <NavLink to='contact'>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
