import {gql} from '@apollo/client'

export const GET_USERS = gql`
    query getAllUser{
    users{
        id
        name
        profilePicture
    }
    }
`