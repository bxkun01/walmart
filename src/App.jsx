// App.jsx
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import Home from './Pages/Home'
import Registration from './Pages/Registration'
import MainLayout from './Layout/Layout'
import Product from './Pages/Product'
import Cart from './Pages/Cart'



const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path:'/product/:id',
        element:<Product />

      },
      {
        path:'/cart',
        element:<Cart/>
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
