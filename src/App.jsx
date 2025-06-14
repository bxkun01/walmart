// App.jsx
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom'

import Home from './Pages/Home'
import Registration from './Pages/Registration'
import MainLayout from './Layout/Layout'
import ProductSection from './Components/ProductSection'



const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path:'/product',
        element:<ProductSection />

      }
    ]
  },
  {
    path: '/login',
    element: <Registration />
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
