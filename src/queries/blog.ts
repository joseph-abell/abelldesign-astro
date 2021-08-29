const blog = `
    query blog($slug: String) {
        blog(where: {slug: $slug}) {
            slug
            content {
              html
            }
            featuredImage {
              height
              url
            }
            featuredLinkText
            quote
            quoteAuthor
            subtitle
            title
            image {
              height
              url
            }
            seoDescription
        }
    }
`;
export default blog;
