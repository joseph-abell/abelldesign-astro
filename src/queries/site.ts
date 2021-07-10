const site = `
query {
  headers(first:1) {
    image {
      url
      height
    }
  }
  footers(first:1) {
    emailText
    emailImage {
      url
      height
    }
    emailLink
    phoneText
    phoneImage {
      url
      height
    }
    instagramText
    instagramImage {
      url
      height
    }
    instagramLink
    linkedInText
    linkedInImage {
      url
      height
    }
    linkedInLink
    footerLogoImage {
      url
      height
    }
  }
  menu: menus {
    text
    slug
    order
  }
}
`;

export default site;
