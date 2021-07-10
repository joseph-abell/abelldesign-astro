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
    }
    worksPages(first:1) {
      quote
      quoter

    }
  }  
`;

export default works;
