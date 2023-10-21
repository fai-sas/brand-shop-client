/* eslint-disable no-unused-vars */
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'
import Swal from 'sweetalert2'

const ProductDetailsPage = () => {
  const { user } = useContext(AuthContext)

  const [singleProduct, setSingleProduct] = useState([])

  const data = useLoaderData()
  const { id } = useParams()

  useEffect(() => {
    const findProduct = data?.find((product) => product._id === id)
    setSingleProduct(findProduct)
  }, [id, data])

  const handleAddToCart = async () => {
    const userId = user.uid
    const name = singleProduct.name
    const price = singleProduct.price
    const image = singleProduct.image
    const type = singleProduct.type
    const brandName = singleProduct.brandName
    const description = singleProduct.description

    const addedProduct = {
      userId,
      name,
      price,
      image,
      type,
      brandName,
      description,
    }

    try {
      const response = await axios.post(
        'https://brand-shop-server-sable.vercel.app/addedproducts',
        addedProduct,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      console.log(response.data)
      console.log(addedProduct)
      if (response.data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'Product Added Successfully',
          icon: 'success',
          confirmButtonText: 'Okay',
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className=' container mx-auto p-8 bg-white border rounded-xl shadow-sm sm:flex dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
        <div className='flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-l-xl sm:max-w-[15rem] md:rounded-tr-none md:max-w-xs'>
          <img
            src={singleProduct.image}
            alt={singleProduct.name}
            className='absolute top-0 left-0 object-cover w-full h-full'
          />
        </div>
        <div className='flex flex-wrap'>
          <div className='flex flex-col h-full p-4 sm:p-7'>
            <h3 className='text-lg font-bold text-gray-800 dark:text-white'>
              {singleProduct.name}
            </h3>
            <h3 className='py-4 text-lg font-bold text-gray-800 dark:text-white'>
              $ {singleProduct.price}
            </h3>
            <p className='mt-1 text-gray-800 dark:text-gray-400'>
              {singleProduct.description}
            </p>
            <div className='mt-5 sm:mt-auto'>
              <Link to='#'>
                <button
                  onClick={handleAddToCart}
                  type='button'
                  className='inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white transition-all bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800'
                >
                  <svg
                    className='w-3.5 h-3.5'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    viewBox='0 0 16 16'
                  >
                    <path d='M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z' />
                  </svg>
                  Add to cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProductDetailsPage
