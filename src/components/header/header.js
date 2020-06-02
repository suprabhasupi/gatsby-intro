import React from 'react'
import {Link} from 'gatsby'
import './header.scss'

const Header = () => (
    <header>
        <Link to='/'><strong>Workshop</strong></Link>
        <nav>
        <Link to='/' activeClassName='current-page'>Home</Link>
        <Link to='/about' activeClassName='current-page'>About</Link>
        </nav>
    </header>
)

export default Header