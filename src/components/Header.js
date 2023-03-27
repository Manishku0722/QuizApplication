import { Link } from '@material-ui/core';
import React from 'react'
import './Header.css';
const Header = () => {
  return (
    <div className='header'>
        <Link to='/' className='title'>Quiz Hub</Link>
        <hr className='divider'/>
    </div>
    
  )
}

export default Header