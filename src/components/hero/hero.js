import React from 'react'
import './hero.scss'
import {Link, graphql, useStaticQuery} from 'gatsby'

const Hero = () => {
    return (
        <div className='hero-bg'>
            <div className='text-box'>
                <h1>Learning Gatsby ♥️</h1>
                <p>Hello, <Link to='/about/'>Learn about me &rarr;</Link></p>
            </div>
        </div>
    )
}

export default Hero

