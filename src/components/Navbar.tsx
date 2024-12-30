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
    <nav className="sticky top-0 bg-footer-and-nav text-white py-2 z-50 shadow-md">
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
        <div className="absolute top-full left-0 w-full bg-[#1b1238] shadow-md md:hidden">
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
