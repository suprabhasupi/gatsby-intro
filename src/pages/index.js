import React from 'react';
import {Link} from 'gatsby'
import Layout from '../components/layout'
import usePosts from '../hooks/use-posts'
import PostPreview from '../components/post-preview/post-preview'

export default () => {
    const posts = usePosts()
    return (
        <Layout>  
            <div>Homepage</div>
            <Link to='/about'>About Us &rarr;</Link>  

            <h2>Read My Blogs:</h2>
            {posts.map(post => {
            //    return <pre>{JSON.stringify(post, null, 2)}</pre>
            return (
                <PostPreview key={post.slug} post={post}/>
            )
            })}
        </Layout>
    )
}
