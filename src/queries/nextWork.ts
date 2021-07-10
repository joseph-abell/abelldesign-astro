const nextWork = `
    query nextWork($id: String) {
        worksConnection(stage: PUBLISHED, after: $id, first: 1) {
            edges {
                node {
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
        }
    }
`;

export default nextWork;
