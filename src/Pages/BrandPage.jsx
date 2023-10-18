/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const BrandPage = () => {
  const [singleBrand, setSingleBrand] = useState([])

  const data = useLoaderData()

  const { brandName } = useParams()

  useEffect(() => {
    const findBrand = data?.find((brand) => brand.brandName === brandName)
    setSingleBrand(findBrand)
    console.log(findBrand)
  }, [brandName, data])

  return (
    <div>
      <h1>Brand Page : {singleBrand.name}</h1>
    </div>
  )
}
export default BrandPage
