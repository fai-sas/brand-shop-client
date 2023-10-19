/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from 'react-router-dom'

const ProductByBrands = ({ product }) => {
  const { _id, name, brandName, type, price, rating, image } = product

  return (
    <section
      className='flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]'
      href='#'
    >
      <div className='relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden'>
        <img
          src={image}
          alt={name}
          className='absolute top-0 left-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105 rounded-t-xl'
        />
      </div>
      <div className='p-4 md:p-5'>
        <h3 className='text-lg font-bold text-gray-800 dark:text-white'>
          {name}
        </h3>
        <p className='mt-1 text-gray-800 dark:text-gray-400'>{brandName}</p>
        <p className='mt-1 text-gray-800 dark:text-gray-400'>{type}</p>
        <p className='mt-1 text-gray-800 dark:text-gray-400'>{price}</p>
        <p className='mt-1 text-gray-800 dark:text-gray-400'>{rating}</p>
        <Link to={`/products/${_id}`}>
          <button
            type='button'
            className='inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white transition-all bg-gray-800 border border-transparent rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800'
          >
            Details
          </button>
        </Link>

        <Link to={`/updateproduct/${_id}`}>
          <button
            type='button'
            className='inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-gray-800 transition-all border-2 border-gray-900 rounded-md hover:text-white hover:bg-gray-800 hover:border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 dark:hover:bg-gray-900 dark:border-gray-900 dark:hover:border-gray-900 dark:text-white dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800'
          >
            Update
          </button>
        </Link>
      </div>
    </section>
  )
}

export default ProductByBrands
