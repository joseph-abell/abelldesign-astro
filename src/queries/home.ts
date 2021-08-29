export const home = `
  query {
    works {
      id
      createdAt
      publishedAt
      title
      slug
      featuredDeck
      showOnHomepage
      featuredImage {
        url
        height
      }
      featuredLinkText
      content {
        markdown
      }
    }
    services {
      id
      createdAt
      publishedAt
      title
      featuredDeck
      showOnHomepage
      featuredImage {
        url
        height
      }
      featuredLinkText
      work {
          slug
      }
    }
    homepage: homepages(first: 1) {
      title
      subtitle
      image {
        url
        height
      }
      contactLinkText
      workLinkText
      servicesLinkText
      brandsText
      quote
      quoter
      seoDescription
    }
    brands {
        id
        image {
            url
            height
        }
    }
  }  
`;

export default home;
