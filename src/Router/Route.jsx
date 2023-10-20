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
import ErrorPage from '../Pages/ErrorPage'

const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        loader: () =>
          fetch('https://brand-shop-server-sable.vercel.app/brands'),
      },
      {
        path: '/brands/:brandName',
        element: <BrandPage />,
        loader: () =>
          fetch('https://brand-shop-server-sable.vercel.app/brands'),
      },
      {
        path: '/products/:id',
        element: (
          <PrivateRoute>
            <ProductDetailsPage />{' '}
          </PrivateRoute>
        ),
        loader: () =>
          fetch('https://brand-shop-server-sable.vercel.app/brands'),
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
          fetch(
            `https://brand-shop-server-sable.vercel.app/brands/${params.id}`
          ),
      },
      {
        path: '/mycart',
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
        loader: () =>
          fetch('https://brand-shop-server-sable.vercel.app/addedproducts'),
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
