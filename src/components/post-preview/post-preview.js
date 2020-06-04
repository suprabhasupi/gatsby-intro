import React from 'react'
import {Link} from 'gatsby'

import './post-preview.scss'

const postPreview= ({post}) => {
    return (
        <article>
            <h3><Link to={post.slug}>{post.title}</Link></h3>
            <p>{post.excerpt}</p>
            <Link to={post.slug}>read this post &rarr;</Link>
        </article>
    )
}

export default postPreview