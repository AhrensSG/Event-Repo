import React from 'react';
import Link from 'next/link';

const NavBar = () => {
    return (
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
        
          <div className="text-white text-2xl mr-auto">
            <Link href="/">Event-Repo</Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/events">
              <a className="text-white hover:text-gray-200">Events</a>
            </Link>
            <Link href="/about">
            </Link>

        </div>    
        </div>
    </nav>
            );
        };

    export default NavBar;