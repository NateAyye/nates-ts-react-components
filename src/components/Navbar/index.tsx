import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/button'}>Button</Link>
        </li>
        <li>
          <Link to={'/select'}>Select</Link>
        </li>
        <li>
          <Link to={'/input'}>Input</Link>
        </li>
        <li>
          <Link to={'/form'}>Form</Link>
        </li>
        <li>
          <Link to={'/avatar'}>Avatar</Link>
        </li>
      </ul>
    </div>
  );
};
