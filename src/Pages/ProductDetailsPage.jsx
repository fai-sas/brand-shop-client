/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const ProductDetailsPage = () => {
  const [singleProduct, setSingleProduct] = useState([])

  const data = useLoaderData()
  const { id } = useParams()

  useEffect(() => {
    const findProduct = data?.find((product) => product._id === id)
    setSingleProduct(findProduct)
    console.log(singleProduct)
  }, [id, data])

  return (
    <>
      <div className='container p-8 mx-auto text-4xl font-bold'>
        ProductDetailsPage : {singleProduct.name}
      </div>
    </>
  )
}
export default ProductDetailsPage
