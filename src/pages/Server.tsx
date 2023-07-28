import { useParams } from 'react-router-dom'

const Server = () => {
  const { serverId } = useParams()

  return (
    <div className="w-full flex h-screen">
      <div className="w-60 h-full bg-gray2 text-white">
        <p>Server Details</p>
        <small>{serverId}</small>
      </div>
      <div className="flex-1 flex h-full">
        <div className="flex-1 h-full bg-gray4 text-white">Chats</div>
        <div className="w-80 bg-gray2 text-white">Member List</div>
      </div>
    </div>
  )
}

export default Server
