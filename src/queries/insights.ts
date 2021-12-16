const insights = `
    query insights {
        insights {
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
            author {
                name
                image {
                    height
                    url
                }
            }
        }
        insightsPages {
            seoDescription
        }
    }
`;

export default insights;
