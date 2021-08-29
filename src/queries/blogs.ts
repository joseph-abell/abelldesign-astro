const blogs = `
    query blogs {
        blogs {
            id
            content {
                html
            }
            featuredImage {
                height
                url
            }
            featuredLinkText
            image {
                height
                url
            }
            quote
            quoteAuthor
            slug
            stage
            subtitle
            title
            createdAt
            seoDescription
        }
        blogsPages {
            seoDescription
        }
    }
`;

export default blogs;
