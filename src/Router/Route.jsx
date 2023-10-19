import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import HomePage from '../Pages/HomePage'
import AddProduct from '../Pages/AddProduct'
import MyCart from '../Pages/MyCart'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import BrandPage from '../Pages/BrandPage'
import ProductDetailsPage from '../Pages/ProductDetailsPage'

const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        loader: () => fetch('http://localhost:5000/brands'),
      },
      {
        path: '/brands/:brandName',
        element: <BrandPage />,
        loader: () => fetch('http://localhost:5000/brands'),
      },
      {
        path: '/products/:id',
        element: <ProductDetailsPage />,
        loader: () => fetch('http://localhost:5000/brands'),
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
