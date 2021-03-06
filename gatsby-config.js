module.exports = {
    siteMetadata: {
        title: 'Gatsby Workshop',
        description: 'Learn Gatsby From scratch!'
    },
    plugins: ['gatsby-plugin-sass', 
            'gatsby-plugin-react-helmet',
            'gatsby-transformer-sharp',
            'gatsby-plugin-sharp',
            {
                resolve: 'gatsby-source-instagram',
                options: {
                    username: 'karanisverma'
                }
            },
            {
                resolve: 'gatsby-plugin-mdx',
                options: {
                    defaultLayouts: {
                        default: require.resolve('./src/components/layout')
                    },
                    gatsbyRemarkPlugins: ['gatsby-remark-images'],
                    plugins: ['gatsby-remark-images'],
                }
            },
            {
                resolve: 'gatsby-source-filesystem',
                options: {
                    name: 'posts',
                    path: 'posts'
                }
            },
            {
                resolve: 'gatsby-source-filesystem',
                options: {
                    name: 'images',
                    path: 'images'
                }
            },
            {
                resolve: 'gatsby-plugin-webpack-bundle-analyzer',
                options: {
                    production: true,
                    disable: !process.env.ANALYZE_BUNDLE_SIZE,
                    generateStatsFile: true,
                    analyzerMode: 'static',
                }
            }
            ]
}