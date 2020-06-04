module.exports = {
    siteMetadata: {
        title: 'Gatsby Workshop',
        description: 'Learn Gatsby From scratch!'
    },
    plugins: ['gatsby-plugin-sass', 
            'gatsby-plugin-react-helmet',
            {
                resolve: 'gatsby-plugin-mdx',
                options: {
                    defaultLayouts: {
                        default: require.resolve('./src/components/layout')
                    }
                }
            }
            ]
}