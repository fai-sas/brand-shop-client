/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const Advertisement = ({ brandName }) => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter((item) => item.brandName === brandName)
        setCards(filteredData)
      })
      .catch((error) => {
        console.error()
      })
  }, [brandName])

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ]
  )

  return (
    <>
      <div className=' p-4 lg:p-16'>
        {cards.map((item) => {
          return (
            <div key={item.index} ref={sliderRef} className='keen-slider p-0'>
              <div className='rounded-md keen-slider__slide number-slide1 pb-0'>
                <img src={item?.img1} className='' alt='' />
              </div>
              <div className='rounded-md keen-slider__slide number-slide2 pb-0'>
                <img src={item?.img2} alt='' className='' />
              </div>
              <div className='rounded-md keen-slider__slide number-slide3 pb-0'>
                <img src={item?.img3} className='' alt='' />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Advertisement
