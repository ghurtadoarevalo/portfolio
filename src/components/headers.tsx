import { useState } from 'react';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#' },
];

function linkRouteClassName(routeName: string, currentRoute: string) {
  return currentRoute === routeName ? 'text-gray-300 pl-4' : 'text-gray-500 pl-4';
}

const Header = () => {
  const [currentRoute, setCurrentRoute] = useState('About');

  return (
    <header className="pb-10">
      <nav className="grid grid-cols-3 place-items-center">
        <div className="font-thin">
          <span className="text-white text-xl">gHurtado</span>
          <span className="text-yellow-600 text-xl">_dev</span>
        </div>

        <div className="col-span-2">
          {navigation.map((navigationItem) => (
            <a
              key={navigationItem.name}
              className={linkRouteClassName(navigationItem.name, currentRoute)}
              href={navigationItem.href}
              onClick={() => setCurrentRoute(navigationItem.name)}
            >
              {navigationItem.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
