import React from 'react'
import {Link} from 'gatsby'
import ReadLink from '../components/read-link/read-link'

import './post-preview.scss'

const postPreview= ({post}) => {
    return (
        <article>
            <h3><Link to={post.slug}>{post.title}</Link></h3>
            <p>{post.excerpt}</p>
            <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
        </article>
    )
}

export default postPreview