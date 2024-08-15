import React, {Component} from 'react';
import Link from 'next/link';
export default function Navbar() {
    return (
     
            <div className="navbar__container">
                <ul className="navbar__items">
                    <Link href={'/'}>
                    <li className="navbar__item">
                        Home
                    </li>
                    </Link>
                    <Link href={'/teams'}>
                    
                    <li className="navbar__item">
                        Teams
                    </li>
                    </Link>
                    <Link href={'/matches'}>
                    <li className="navbar__item">
                        Matches
                    </li>
                    </Link>
                    <Link href={'/standings'}>
                    <li className="navbar__item">
                        Standings
                    </li>
                    </Link>
                    
                </ul>
            </div>
    )

}