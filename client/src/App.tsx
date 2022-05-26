import UserDisplay from './components/UserDisplay'
import { User } from './types'
import { gql, useQuery } from '@apollo/client'

const UserQuery = gql`
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

function App() {
  const { data } = useQuery<{ users: User[] }>(UserQuery);

  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center p-4 gap-y-12 overflow-scroll">
      {
        data?.users.map((user) => <UserDisplay user={user} />)
      }
    </div>
  )
}

export default App
