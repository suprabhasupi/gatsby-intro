import React from 'react'
import './hero.scss'
import {Link, graphql, useStaticQuery} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const Hero = () => {
    const {image} = useStaticQuery(graphql`
        query {
            image: file(relativePath: {eq: "banner.jpg"}){
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    return (
        <BackgroundImage className="hero-bg" fluid={image.sharp.fluid} fadeIn="soft">
            <div className='text-box'>
                <h1>Learning Gatsby</h1>
                <p>Hello, <Link to='/about/'>Learn about me &rarr;</Link></p>
            </div>
        </BackgroundImage>
    )
}

export default Hero

