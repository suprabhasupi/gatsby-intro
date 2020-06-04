// gatsby give utility methods actions, graphql, reporter
// reporter is gatsby console log 
exports.createPages = async ({actions, graphql, reporter}) => {
    const result = await graphql(`
        query {
            allMdx {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `);

    if(result.errors) {
        reporter.panic("failed to craete post", result.errors)
    }

    const posts = result.data.allMdx.nodes

    posts.forEach(post => {
        actions.createPage({
            path: post.frontmatter.slug,
            component: require.resolve("./src/templates/post/post.js"),
            context: {
                slug: `/${post.frontmatter.slug}`
            }
        });
    });
};