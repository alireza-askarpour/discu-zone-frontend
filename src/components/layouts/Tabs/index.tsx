import { ReactNode } from 'react'
import ServerList from '@/views/ServerList'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <ServerList />
      <div className="w-full">{children}</div>
    </div>
  )
}

export default MainLayout
