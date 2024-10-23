import React from 'react';
import { Sun } from 'lucide-react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 w-full">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Sun className="mr-2" />
          <h1 className="text-2xl font-bold">Solar Smart Energy</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            {/* <li><Link href="/" className="hover:underline">Dashboard</Link></li> */}
            {/* <li><Link href="/settings" className="hover:underline">Settings</Link></li>
            <li><Link href="/profile" className="hover:underline">Profile</Link></li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;