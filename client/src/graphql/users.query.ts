import { gql } from "urql";

export const GetUsers = gql`
  query GetUsers {
    users {
      id
      name
      notes {
        message
      }
    }
  }
`