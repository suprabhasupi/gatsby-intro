import React from 'react'
import {graphql} from 'gatsby'
import {Link} from 'gatsby'
import './post.scss'
import Layout from '../../components/layout'


const PostTemplate = () => (
    <Layout className='post-wrapper'>
        <h1>Post Title</h1>
        <p className='author'>Posted by author</p>
        <p>Post body</p>
        <p>Post body</p>
        <Link to="/">&larr; back to all posts</Link>
    </Layout>
)

export default PostTemplate