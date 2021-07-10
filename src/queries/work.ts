const work = `
  query($slug: String) {
    work(where: {slug: $slug}) {
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

export default work;
