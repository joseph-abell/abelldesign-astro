const insight = `
  query insight($slug: String) {
    insight(where: {slug: $slug}) {
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
      author {
        name
        image {
          height
          url
        }
      }
    }
  }
`;
export default insight;
