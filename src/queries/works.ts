const works = `
  query {
    works {
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
      stage
      seoDescription
    }
    worksPages(first:1) {
      quote
      quoter
      seoDescription
    }
  }  
`;

export default works;
