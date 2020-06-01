import React from 'react';
import {Link} from 'gatsby'
import Layout from '../components/layout'

export default () => (
    <Layout>  
        <div>Homepage</div>
        <Link to='/about'>About Us &rarr;</Link>  
    </Layout>
)
