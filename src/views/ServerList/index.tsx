import { useNavigate } from 'react-router-dom'
import ServerItem from './ServerItem'

const SERVER_LIST = [
  {
    id: '65df2g6dfg2d56fg25d6f3gv2d5fv',
    name: 'Jamishid',
  },
  {
    id: 'fg25d6f3gdfg2d56v2d5fv65df2g6',
    name: 'Majidland',
  },
  {
    id: 'f56gd62v6f5hfg65f32gb6fg2bf6g5',
    name: 'Test',
  },
  {
    id: 'c25s6d1c5sdf1r5g6d2c2s6dc2s6dsv',
    name: 'DiscuZone',
  },
]

const ServerList = () => {
  const navigate = useNavigate()

  const handleClick = (id: string) => {
    // navigate(`/channels/${id}`)
  }

  return (
    <div className="w-[72px] bg-gray1 h-screen">
      {SERVER_LIST.map((item, index) => (
        <ServerItem key={index} onClick={() => handleClick(item.id)} />
      ))}
    </div>
  )
}

export default ServerList
