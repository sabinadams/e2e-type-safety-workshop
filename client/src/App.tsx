import UserDisplay from './components/UserDisplay'
import { User } from './types'

function App() {
  const data: {
    users: User[]
  } = {
    users: [{
      name: 'Sabin',
      notes: [{
        message: 'This is a note for Sabin',
        createdAt: new Date()
      }]
    }]
  }

  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center p-4 gap-y-12 overflow-scroll">
      {
        data?.users.map((user) => <UserDisplay user={user} />)
      }
    </div>
  )
}

export default App
