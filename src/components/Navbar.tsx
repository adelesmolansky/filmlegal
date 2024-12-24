import React from 'react';
import { NavLink } from 'react-router-dom';

type NavItem = {
  to: string;
  label: string;
};

const navItems: NavItem[] = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Representative Projects' },
  { to: '/contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const getNavLinkClassName = (isActive: boolean) => {
    return isActive ? 'font-bold underline text-white' : 'hover:text-gray-300';
  };

  return (
    <nav className="bg-blue-700 text-white px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <NavLink to="/">Law Office of Innes Smolansky</NavLink>
        </div>
        <ul className="navbar-ul flex gap-4">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => getNavLinkClassName(isActive)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
