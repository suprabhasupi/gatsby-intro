import React from 'react'
import Image from 'gatsby-image'
import useInstagram from '../../hooks/use-instagram'
import './instagram.scss'

const Instagram = () => {
    const instaPics = useInstagram();
    const {username} = instaPics[0];
    return (
       <>
        <h3> Instagram Post from @{username}</h3>
        <div className='insta-wrapper'>
            {/* we have done spread in useInstagram hook, so fluid is on top */}
            {instaPics.map(pic => (
                 <a href={`https://www.instagram.com/p/${pic.id}/`} className='instagram_pic' target='_blank'>
                    <Image className='instag-img' fluid={pic.fluid} alt={pic.caption} />
                 </a>
            ))}
        </div>
        <a href={`https://www.instagram.com/${username}`}>See more on Instagram &rarr;</a>
       </>
    )
}

export default Instagram