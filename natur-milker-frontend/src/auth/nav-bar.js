import React from 'react'
import AuthNav from './auth-nav'

const NavBar = () => {
  return (
    <div className='nav-container'>
      <nav className='navbar'>
        <div className='container'>
          <AuthNav />
        </div>
      </nav>
    </div>
  )
}

export default NavBar
