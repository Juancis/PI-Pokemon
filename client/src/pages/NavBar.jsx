import React from 'react'
import { Link, useLocation } from 'react-router-dom';


const NavBar = () => {
    const {pathname} = useLocation()
    return (
        <div>
        <ul style={{display:'flex', margin: 0, padding: 0 }} >
            <div className={pathname === '/home' ? 'buttonNavBar buttonNavBarActive' : 'buttonNavBar' }><Link to='/home' className='textNavBar'> Home </Link></div>
            <div className={pathname === '/create' ? 'buttonNavBar buttonNavBarActive' : 'buttonNavBar' }><Link to='/create' className='textNavBar'> Create Pokemon</Link></div>
        </ul>
        </div>
    )

}

export default NavBar;