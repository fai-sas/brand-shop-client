/* eslint-disable no-unused-vars */
import { useLoaderData, useParams } from 'react-router-dom'
import BrandsCard from './BrandsCard'

const Brands = () => {
  const loadedBrands = useLoaderData()

  const uniqueBrands = loadedBrands.filter((brand, index, self) => {
    return self.findIndex((b) => b.brandName === brand.brandName) === index
  })

  return (
    <>
      <h1 className='py-8 text-4xl font-bold'>Our Popular Products</h1>
      <div className='md:grid md:grid-cols-2 md:gap-8'>
        {uniqueBrands.map((brand) => (
          <BrandsCard key={brand._id} brand={brand} />
        ))}
      </div>
    </>
  )
}

export default Brands
