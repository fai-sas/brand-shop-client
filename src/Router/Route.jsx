import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import HomePage from '../Pages/HomePage'
import AddProduct from '../Pages/AddProduct'
import MyCart from '../Pages/MyCart'
import Login from '../Pages/Login'
import Register from '../Pages/Register'

const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/addproduct',
        element: <AddProduct />,
      },
      {
        path: '/mycart',
        element: <MyCart />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
])

export default Route
