import cx from 'classix';
import React, { useState } from 'react';

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: '#header', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#consultation', label: 'Consultation' },
  { href: '#footer', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={cx(
        'bg-footer-and-nav', // background color for footer and navbar
        'text-white', // text color for navbar
        'sticky top-0', // stick to the top of the screen
        ' py-2 z-50 shadow-md'
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-lg font-bold">Law Office of Innes Smolansky</h1>
        {/* Hamburger icon for mobile screen */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:underline px-4 py-2"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Navbar items for the mobile version */}
      {isOpen && (
        <div
          className={cx(
            'bg-footer-and-nav', // background color for footer and navbar
            'absolute left-0', // absolute positioning
            'top-full w-full shadow-md',
            'md:hidden' // only visible on mobile screen
          )}
        >
          <div className="flex flex-col items-start space-y-2 px-4 py-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block hover:underline w-full text-right px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
