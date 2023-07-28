import { RouterProvider } from 'react-router-dom'
import { router } from '@/routers/index.routes'
import MainLayout from '@/components/layouts/Tabs'

const App = () => {
  return (
    <MainLayout>
      <RouterProvider router={router} />
    </MainLayout>
  )
}

export default App
