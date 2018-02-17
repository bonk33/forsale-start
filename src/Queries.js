import gql from 'graphql-tag'

export const getItems = gql`
    query getItems {
        listings: allItems {
            id
            title
            owner {
                username
            }
            imageVersion
            imageId
            description
            price
        }
    }
`