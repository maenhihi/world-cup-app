import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function Navbar() {
    return (
   
    <ul className="navbar__items">
            <Image src={'/flags/fifa-logo.svg'} alt="world cup logo"
                width={100}
                height={50} />
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
            
<li>
<nav>
    <input type="checkbox" id="check"/>
    <label htmlFor="check" className="menu-icon">
      <i className="fas fa-bars"></i>
    </label>
  <div className="nav-mobile">
    <Link className='nav__mobile--link' href="/">Home</Link>
    <Link className='nav__mobile--link' href="/teams">Teams</Link>
    <Link className='nav__mobile--link' href="/matches">Matches</Link>
    <Link className='nav__mobile--link' href="/standings">Standings</Link>
  </div>
</nav>
</li>

        </ul>
 


    )

}  