import Message from './Message'
import { FaPlusCircle } from 'react-icons/fa';
import { User } from '../types'

type Props = {
    user: User
}

export default function UserDisplay({ user }: Props) {

    return <div className="flex gap-x-24 justify-center">
        <div className="rounded-sm flex justify-center items-center drop-shadow-md bg-neutral-700 w-48 h-20">
            <p className="text-xl text-gray-200 font-bold">
                {user.name}
            </p>
        </div>
        <div>
            {user.notes.map((message, i) => <Message key={i} index={i} note={message} />)}
            <button className="group flex justify-center w-full border-2 rounded-lg p-2 border-neutral-900 bg-neutral-900 bg-opacity-30 border-opacity-50 transition ease-in-out duration-300 hover:bg-opacity-100 hover:scale-105">
                <FaPlusCircle className='fill-neutral-900 w-8 h-8 transition ease-in-out duration-300 group-hover:fill-blue-500 group-hover:opacity-75' />
            </button>
        </div>
    </div>
}