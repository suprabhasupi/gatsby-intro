import React from 'react'
import {graphql} from 'gatsby'
import {Link} from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import './post.scss'
import Layout from '../../components/layout'

export const query = graphql`
    query($slug: String!) {
        mdx(frontmatter: {slug: {eq: $slug}}) {
            frontmatter {
                title
                author
            }
            body
        }
    }
`

const PostTemplate = ({data: {mdx: post }}) => (
    <Layout className='post-wrapper'>
        <h1>{post.frontmatter.title}</h1>
        <p className='author'>Posted by {post.frontmatter.author}</p>
        <MDXRenderer>{post.body}</MDXRenderer>
        {/* <pre>{JSON.stringify(post, null, 10)}</pre> */}
        <Link to="/">&larr; back to all posts</Link>
    </Layout>
)

export default PostTemplate