import React from 'react'
import {Link} from 'gatsby'
import Image from 'gatsby-image'

import './post-preview.scss'

const postPreview= ({post}) => {
    console.log("postPreview -> post", post)
    return (
        <article>
            <Link className='image-link' to={post.slug}>
                <Image 
                    className='post-image'
                    fluid={post.image.sharp.fluid}
                    alt={post.title}
                />
            </Link>
            <div>
                <h3><Link to={post.slug}>{post.title}</Link></h3>
                <p>{post.excerpt}</p>
                <Link to={post.slug}>read this post &rarr;</Link>
            </div>
        </article>
    )
}

export default postPreview