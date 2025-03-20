import React from 'react'
import { Parallax } from 'react-parallax'
import BusinessImg1 from '../../public/img/business1.jpg'
import Button from '../components/Button'

function ImgParallaxOne() {
  return (
    <Parallax 
        bgImage={BusinessImg1} 
        bgImageAlt="an image of two women doing a transaction in a store" 
        strength={800}
        className='relative h-screen'
        >
        <div className='flex items-center justify-center absolute h-screen w-full'>
            <div className='
                 flex flex-col justify-center items-center text-center bg-[#121212] max-h-[200px] p-4 text-lg rounded-lg'
                >
                <h2 className='uppercase text-[#F8F8F8] text-2xl md:text-xl p-2 md:p-3 mb-2'>Welcome to our brand new expense tracker app!</h2>
                <Button variant='button'>
                  Try it out!
                </Button>
            </div>
        </div>
    </Parallax>
  )
}

export default ImgParallaxOne