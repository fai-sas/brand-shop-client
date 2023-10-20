/* eslint-disable no-unused-vars */
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import HomePage from '../Pages/HomePage'
import AddProduct from '../Pages/AddProduct'
import MyCart from '../Pages/MyCart'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import BrandPage from '../Pages/BrandPage'
import ProductDetailsPage from '../Pages/ProductDetailsPage'
import UpdateProduct from '../Pages/UpdateProduct'
import PrivateRoute from './PrivateRoute'

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
        element: (
          <PrivateRoute>
            <ProductDetailsPage />{' '}
          </PrivateRoute>
        ),
        loader: () => fetch('http://localhost:5000/brands'),
      },
      {
        path: '/addproduct',
        element: (
          <PrivateRoute>
            {' '}
            <AddProduct />{' '}
          </PrivateRoute>
        ),
      },
      {
        path: '/updateproduct/:id',
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/brands/${params.id}`),
      },
      {
        path: '/mycart',
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
        loader: () => fetch('http://localhost:5000/addedproducts'),
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
