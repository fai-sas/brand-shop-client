/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from 'react-router-dom'

const ProductByBrands = ({ product }) => {
  const { _id, name, brandName, type, price, rating, image } = product

  if (type && rating) {
    return (
      <section
        className='flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]'
        href='#'
      >
        <div className='relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden'>
          <img
            src={image}
            alt={name}
            className='absolute top-0 h-[25rem] object-cover left-0  w-full transition-transform duration-500 ease-in-out group-hover:scale-105 rounded-t-xl'
          />
        </div>
        <div className='p-4 space-y-4 md:p-5 bg-slate-100 dark:bg-slate-800'>
          <h3 className='text-3xl font-bold text-gray-800 dark:text-gray-200 '>
            {name}
          </h3>
          <p className='mt-1 text-2xl font-bold text-gray-800 dark:text-gray-400'>
            $ Price: {price}
          </p>
          <div className='flex justify-start gap-10 text-2xl '>
            <p className='mt-1 text-gray-800 dark:text-gray-400'>
              Brand: {brandName}
            </p>
            <p className='mt-1 text-gray-800 dark:text-gray-400'>
              Category: {type}
            </p>
          </div>
          <p className='mt-1 text-2xl text-gray-800 dark:text-gray-400'>
            Rating: {rating} / 5 &#9733;
          </p>

          <article className='flex gap-4 my-4'>
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
                className='inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-gray-800 transition-all border-2 border-gray-900 rounded-md hover:text-white hover:bg-gray-800 hover:border-gray-800 focus:outline-none focus:ring-2 dark:bg-gray-500 focus:ring-gray-800 focus:ring-offset-2 dark:hover:bg-gray-900 dark:border-gray-900 dark:hover:border-gray-900 dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800'
              >
                Update
              </button>
            </Link>
          </article>
        </div>
      </section>
    )
  } else {
    return (
      <div className='min-h-[15rem] container mx-auto p-8  flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
        <div className='flex flex-col items-center justify-center flex-auto p-4 md:p-5'>
          <svg
            className='max-w-[5rem]'
            viewBox='0 0 375 428'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M254.509 253.872L226.509 226.872'
              className='stroke-gray-400 dark:stroke-white'
              stroke='currentColor'
              stroke-width='7'
              stroke-linecap='round'
            />
            <path
              d='M237.219 54.3721C254.387 76.4666 264.609 104.226 264.609 134.372C264.609 206.445 206.182 264.872 134.109 264.872C62.0355 264.872 3.60864 206.445 3.60864 134.372C3.60864 62.2989 62.0355 3.87207 134.109 3.87207C160.463 3.87207 184.993 11.6844 205.509 25.1196'
              className='stroke-gray-400 dark:stroke-white'
              stroke='currentColor'
              stroke-width='7'
              stroke-linecap='round'
            />
            <rect
              x='270.524'
              y='221.872'
              width='137.404'
              height='73.2425'
              rx='36.6212'
              transform='rotate(40.8596 270.524 221.872)'
              className='fill-gray-400 dark:fill-white'
              fill='currentColor'
            />
            <ellipse
              cx='133.109'
              cy='404.372'
              rx='121.5'
              ry='23.5'
              className='fill-gray-400 dark:fill-white'
              fill='currentColor'
            />
            <path
              d='M111.608 188.872C120.959 177.043 141.18 171.616 156.608 188.872'
              className='stroke-gray-400 dark:stroke-white'
              stroke='currentColor'
              stroke-width='7'
              stroke-linecap='round'
            />
            <ellipse
              cx='96.6084'
              cy='116.872'
              rx='9'
              ry='12'
              className='fill-gray-400 dark:fill-white'
              fill='currentColor'
            />
            <ellipse
              cx='172.608'
              cy='117.872'
              rx='9'
              ry='12'
              className='fill-gray-400 dark:fill-white'
              fill='currentColor'
            />
            <path
              d='M194.339 147.588C189.547 148.866 189.114 142.999 189.728 138.038C189.918 136.501 191.738 135.958 192.749 137.131C196.12 141.047 199.165 146.301 194.339 147.588Z'
              className='fill-gray-400 dark:fill-white'
              fill='currentColor'
            />
          </svg>
          <p className='mt-5 text-2xl text-center text-gray-500 dark:text-gray-500'>
            Sorry! No Product Found for this Brand
          </p>
        </div>
      </div>
    )
  }
}

export default ProductByBrands
