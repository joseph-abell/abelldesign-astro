const firstWork = `
    query firstWork {
        works(first: 1) {
            id
            createdAt
            publishedAt
            title
            slug
            images {
                url
                height
            }
            keywords
            featuredDeck
            featuredImage {
                url
                height
            }
            featuredLinkText
            secondaryImages {
                url
                height
            }
            subtitle
            content {
                html
            }
            quote
            quoteAuthor
        }
    }
`;

export default firstWork;
