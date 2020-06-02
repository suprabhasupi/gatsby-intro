import React from 'react'
import Header from './header/header'
import './layout.scss'

const Layout = ({children}) => (
    <>
    <Header />
    <main className='main-wrapper'>{children}</main>
    </>
)

export default Layout