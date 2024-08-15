import React, {Component} from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function Navbar() {
    return (
     
            <div className="navbar__container">
               
                <ul className="navbar__items">
                <Image src={'/flags/fifa-logo.svg'} alt="world cup logo"
            width={100}
            height={50}/>
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