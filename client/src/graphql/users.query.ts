export const GetUsers = `
  query GetUsers {
    users {
      id
      name
      notes {
        message
        createdAt
      }
    }
  }
`