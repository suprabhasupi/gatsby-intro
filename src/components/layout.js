import React from 'react'
import {Helmet} from 'react-helmet'
import Header from './header/header'
import useSiteMetadata from '../hooks/use-siteMetadata'
import './layout.scss'

const Layout = ({children}) => {
    const {title, description} = useSiteMetadata();
    return (
        <>
        <Helmet>
            <html lang='en' />
            <title>{title}</title>
            <meta name='description' content={description} />
        </Helmet>
    
        <Header />
        <main className='main-wrapper'>{children}</main>
        </>
    )
}

export default Layout