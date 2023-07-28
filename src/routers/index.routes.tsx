import { createBrowserRouter } from 'react-router-dom'

import Server from '@/pages/Server'
import Frends from '@/pages/Frends'
import FrendDetails from '@/pages/FrendDetails'

export const router = createBrowserRouter([
  {
    path: '/channels/@me',
    element: <Frends />,
  },
  {
    path: '/channels/@me/:frendId',
    element: <FrendDetails />,
  },
  {
    path: '/channels/:serverId',
    element: <Server />,
  },
  {
    path: '/channels/:serverId/:channelId',
    element: <Server />,
  },
])
