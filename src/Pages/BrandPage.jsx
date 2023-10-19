/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

// import { useEffect, useState } from 'react'
// import { useLoaderData, useParams } from 'react-router-dom'
// import Advertisement from '../Components/Advertisement'
// import ProductByBrands from '../Components/ProductByBrands'

// const BrandPage = () => {
//   const data = useLoaderData()
//   const [singleBrand, setSingleBrand] = useState(data)

//   const { brandName } = useParams()

//   useEffect(() => {
//     const findBrand = data?.find((brand) => brand.brandName === brandName)
//     setSingleBrand(findBrand)
//   }, [brandName, data])

//   return (
//     <div>
//       <Advertisement />
//       <ProductByBrands product={singleBrand} />
//     </div>
//   )
// }
// export default BrandPage

import { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import Advertisement from '../Components/Advertisement'
import ProductByBrands from '../Components/ProductByBrands'

// const BrandPage = () => {
//   const data = useLoaderData()
//   const { brandName } = useParams()
//   const [singleBrand, setSingleBrand] = useState([])

//   useEffect(() => {
//     const findBrand = data.find((brand) => brand.brandName === brandName)
//     if (findBrand) {
//       setSingleBrand([findBrand])
//       console.log(singleBrand)
//     }
//   }, [brandName, data])

//   return (
//     <div>
//       <Advertisement />
//       <ProductByBrands singleBrand={singleBrand} />
//     </div>
//   )
// }

// const BrandPage = () => {
//   const data = useLoaderData()
//   const { brandName } = useParams()
//   const [products, setProducts] = useState([]) // Updated state name to "products"

//   useEffect(() => {
//     fetch(`/brands/${brandName}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data) // Update the state with the fetched products
//       })
//       .catch((error) => {
//         console.error('Error fetching products:', error)
//       })
//   }, [brandName])

//   return (
//     <div>
//       <Advertisement />
//       <ProductByBrands products={products} />{' '}
//       {/* Pass the products array to the component */}
//     </div>
//   )
// }

const BrandPage = () => {
  const data = useLoaderData()
  const { brandName } = useParams()
  const [singleBrand, setSingleBrand] = useState([])

  // useEffect(() => {
  //   const findBrand = data?.find((brand) => brand.brandName === brandName)
  //   setSingleBrand([findBrand])
  //   console.log(singleBrand)
  // }, [brandName, data])

  useEffect(() => {
    const brand = data.filter((brand) => brand.brandName === brandName)
    setSingleBrand(brand)
    console.log(brand)
  }, [brandName, data])

  return (
    <div>
      <Advertisement />
      <section className='gap-4 md:grid md:grid-cols-3'>
        {singleBrand.map((product) => {
          console.log(product)
          return <ProductByBrands key={product._id} product={product} />
        })}
      </section>
      {/* <ProductByBrands singleBrand={singleBrand} /> */}
    </div>
  )
}

export default BrandPage
