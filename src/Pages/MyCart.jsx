/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'

const MyCart = () => {
  const [productsByUserID, setProductsByUserID] = useState([])
  const { user } = useContext(AuthContext)
  const loadedProducts = useLoaderData()
  const userId = user.uid

  useEffect(() => {
    const uniqueProducts = loadedProducts.filter(
      (product) => product.userId === userId
    )
    setProductsByUserID(uniqueProducts)
  }, [loadedProducts, userId])

  console.log(productsByUserID)

  console.log(productsByUserID, length)
  if (productsByUserID.length === 0) {
    return (
      <>
        <div className=' py-8 min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
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
                class='fill-gray-400 dark:fill-white'
                fill='currentColor'
              />
              <ellipse
                cx='133.109'
                cy='404.372'
                rx='121.5'
                ry='23.5'
                class='fill-gray-400 dark:fill-white'
                fill='currentColor'
              />
              <path
                d='M111.608 188.872C120.959 177.043 141.18 171.616 156.608 188.872'
                class='stroke-gray-400 dark:stroke-white'
                stroke='currentColor'
                stroke-width='7'
                stroke-linecap='round'
              />
              <ellipse
                cx='96.6084'
                cy='116.872'
                rx='9'
                ry='12'
                class='fill-gray-400 dark:fill-white'
                fill='currentColor'
              />
              <ellipse
                cx='172.608'
                cy='117.872'
                rx='9'
                ry='12'
                class='fill-gray-400 dark:fill-white'
                fill='currentColor'
              />
              <path
                d='M194.339 147.588C189.547 148.866 189.114 142.999 189.728 138.038C189.918 136.501 191.738 135.958 192.749 137.131C196.12 141.047 199.165 146.301 194.339 147.588Z'
                class='fill-gray-400 dark:fill-white'
                fill='currentColor'
              />
            </svg>
            <p class='mt-5 text-2xl font-bold text-gray-800 dark:text-gray-500'>
              No Products Added
            </p>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <section className='container p-8 mx-auto'>
          <h1 className='p-4 text-4xl font-bold text-center'>
            Your Added Products
          </h1>

          <article className='grid grid-cols-3 gap-4'>
            {productsByUserID.map((product) => {
              const { _id, name, image, type, brandName, description } = product
              return (
                <>
                  <div
                    key={name}
                    className='flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]  '
                  >
                    <img
                      className='w-full h-auto rounded-t-xl'
                      src={image}
                      alt={name}
                    />
                    <div className='p-4 md:p-5'>
                      <h3 className='text-lg font-bold text-gray-800 dark:text-white'>
                        {name}
                      </h3>
                      <p className='mt-1 text-gray-800 dark:text-gray-400'>
                        {description}
                      </p>
                      <a
                        className='inline-flex items-center justify-center gap-2 px-4 py-3 mt-3 text-sm font-semibold text-white transition-all bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800'
                        href='#'
                      >
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </>
              )
            })}
          </article>
        </section>
      </>
    )
  }
}

export default MyCart
