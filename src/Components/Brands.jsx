/* eslint-disable no-unused-vars */
import { useLoaderData, useParams } from 'react-router-dom'
import BrandsCard from './BrandsCard'

const Brands = () => {
  const loadedBrands = useLoaderData()

  const uniqueBrands = loadedBrands.filter((brand, index, self) => {
    return self.findIndex((b) => b.brandName === brand.brandName) === index
  })

  return (
    <section className='container py-8 mx-auto'>
      <h1 className='py-8 text-4xl font-bold text-center'>
        Our Popular Brands
      </h1>
      <div className='grid gap-8 p-8 md:grid-cols-3'>
        {uniqueBrands.map((brand) => (
          <BrandsCard key={brand._id} brand={brand} />
        ))}
      </div>
    </section>
  )
}

export default Brands
