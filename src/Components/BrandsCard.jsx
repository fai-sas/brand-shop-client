/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'

/* eslint-disable no-unused-vars */
const BrandsCard = ({ brand, brands, setBrands }) => {
  const { brandName, brandImage } = brand

  return (
    <article>
      <Link
        to={`/brands/${brandName}`}
        className='flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]'
        href='#'
      >
        <div className='relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden'>
          <img
            className='absolute top-0 left-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105 rounded-t-xl'
            src={brandImage}
            alt={brandName}
          />
        </div>
        <div className='p-4 bg-slate-400 md:p-5'>
          <h3 className='text-lg font-bold text-gray-800 dark:text-white'>
            {brandName}
          </h3>
        </div>
      </Link>
    </article>
  )
}
export default BrandsCard
