import React from 'react'
import './layout.scss'

const Layout = ({children}) => (
    <>
    {/* <header></header> */}
    <main className='main-wrapper'>{children}</main>
    </>
)

export default Layout