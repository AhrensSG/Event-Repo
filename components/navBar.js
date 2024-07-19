import React from 'react';
import Link from 'next/link';


const NavBar = () => {
    return (
    <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
        
        <div className="text-white text-2xl mr-auto">
            <Link href="/">Event-Repo</Link>
        </div>
            <ul className="flex space-x-4">
                
                    <li>
                        <Link href="/events">
                            <i class="fa-light fa-calendar-days" style="color: #74C0FC;">Events</i>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a className="text white hover:text-gray-200">About</a>
                        </Link>
                    </li>
            </ul>
        </div>
    </nav>
    );
};

    export default NavBar;
    
    /*  col 13- <div className="flex space-x-4">
        col 17- <a className="text-white hover:text-gray-200">Events</a>
    
    */