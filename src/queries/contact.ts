const contact = `
    query {
        contacts(first: 1) {
            id
            address
            addressImage {
                url
                height
            }
            instagramImage {
                height
                url
            }
            instagramLink
            instagramLinkText
            linkedInImage {
                height
                url
            }
            linkedInLink
            linkedInLinkText
            phoneImage {
                height
                url
            }
            emailTitle
            emailLinkText
            emailLink
            emailImage {
                height
                url
            }
            phoneText
            slug
            title
            updatedAt
            map {
                longitude
                latitude
            }
            mapZoom
        }
    }
`;

export default contact;
