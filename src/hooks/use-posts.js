import {graphql, useStaticQuery} from 'gatsby';
const usePosts = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx {
            nodes {
                frontmatter{
                    title
                    slug
                    author
                    image {
                        sharp: childImageSharp {
                            fluid(
                                maxWidth: 200
                                maxHeight: 200
                                duotone: {shadow: "#663399", highlight: "#ddbbff"}
                            ) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
                excerpt
            }
            }
        }
    `)
    return data.allMdx.nodes.map(post => ({
        title: post.frontmatter.title,
        slug: post.frontmatter.slug,
        image: post.frontmatter.image,
        author: post.frontmatter.author,
        excerpt: post.excerpt
    })
    ) 
}

export default usePosts