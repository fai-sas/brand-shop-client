/* eslint-disable no-unused-vars */

import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

const UpdateProduct = () => {
  const product = useLoaderData()
  const { _id, name, brandName, type, price, rating, image } = product

  const handleUpdateProduct = async (e) => {
    e.preventDefault()
    const form = e.target

    const name = form.name.value
    const brandName = form.brandName.value
    const type = form.type.value
    const price = form.price.value
    const rating = form.rating.value
    const image = form.image.value

    const updatedProduct = {
      name,
      brandName,
      type,
      price,
      rating,
      image,
    }
    console.log(updatedProduct)

    try {
      const response = await axios.put(
        `https://brand-shop-server-sable.vercel.app/brands/${_id}`,
        updatedProduct,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      console.log(response.data)
      if (response.data.modifiedCount) {
        Swal.fire({
          title: 'Success!',
          text: 'Product Updated Successfully',
          icon: 'success',
          confirmButtonText: 'Cool',
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className='container py-8 mx-auto '>
      <h1 className='text-4xl text-center dark:text-white'>Update Product</h1>

      <form className='p-8 mx-auto w-[90%]' onSubmit={handleUpdateProduct}>
        {/* row 1 */}
        <article className='md:flex md:gap-4'>
          <div className='w-1/2'>
            <label
              htmlFor='name'
              className='block mb-2 text-2xl font-medium dark:text-white'
            >
              Product Name
            </label>
            <input
              type='text'
              name='name'
              defaultValue={name}
              className='block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
              placeholder='Product Name'
            ></input>
          </div>
          <div className='w-1/2'>
            <label
              htmlFor='brandName'
              className='block mb-2 text-2xl font-medium dark:text-white'
            >
              Brand Name
            </label>
            <input
              type='text'
              name='brandName'
              defaultValue={brandName}
              className='block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
              placeholder='Brand Name'
            ></input>
          </div>
        </article>
        {/* end of   row 1 } */}

        {/* row 2 */}
        <article className='py-4 md:flex md:gap-4'>
          <div className='w-1/2'>
            <label
              htmlFor='type'
              className='block mb-2 text-2xl font-medium dark:text-white'
            >
              Type
            </label>
            <input
              type='text'
              name='type'
              defaultValue={type}
              className='block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
              placeholder='Product Type'
            ></input>
          </div>
          <div className='w-1/2'>
            <label
              htmlFor='price'
              className='block mb-2 text-2xl font-medium dark:text-white'
            >
              Price
            </label>
            <input
              type='number'
              name='price'
              defaultValue={price}
              className='block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
              placeholder='Price'
            ></input>
          </div>
        </article>
        {/* end of   row 2 } */}

        {/* row 3 */}
        <article className='py-4 md:flex md:gap-4'>
          <div className='w-1/2'>
            <label
              htmlFor='rating'
              className='block mb-2 text-2xl font-medium dark:text-white'
            >
              Rating
            </label>
            <input
              type='number'
              name='rating'
              defaultValue={rating}
              className='block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
              placeholder='Rating'
            ></input>
          </div>
          <div className='w-1/2'>
            <label
              htmlFor='image'
              className='block mb-2 text-2xl font-medium dark:text-white'
            >
              Image
            </label>
            <input
              type='text'
              name='image'
              defaultValue={image}
              className='block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
              placeholder='Product Image'
            ></input>
          </div>
        </article>
        {/* end of   row 3 } */}

        {/* row 4 */}
        <article className='py-4 md:flex md:gap-4'>
          <div className='w-1/2'></div>
        </article>
        {/* end of   row 4 } */}

        <button
          type='submit'
          className='inline-flex items-center justify-center w-full gap-2 px-4 py-4 my-8 text-2xl font-semibold text-white transition-all bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800'
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
          Update Product
        </button>
      </form>
    </section>
  )
}
export default UpdateProduct
