/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import Advertisement from '../Components/Advertisement'
import ProductByBrands from '../Components/ProductByBrands'

const BrandPage = () => {
  const data = useLoaderData()
  const { brandName } = useParams()
  const [singleBrand, setSingleBrand] = useState([])

  useEffect(() => {
    const brand = data.filter((brand) => brand.brandName === brandName)
    setSingleBrand(brand)
  }, [brandName, data])

  return (
    <div className='container p-8 mx-auto'>
      <Advertisement brandName={brandName} />
      <section className='grid gap-4 md:grid-cols-3'>
        {singleBrand.map((product) => {
          return <ProductByBrands key={product._id} product={product} />
        })}
      </section>
    </div>
  )
}

export default BrandPage
