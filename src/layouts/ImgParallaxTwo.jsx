import React from 'react'
import { Parallax } from 'react-parallax'
import BusinessImg2 from '../../public/img/business2.jpg'
import Button from '../components/Button'

function ImgParallaxTwo() {
  return (
    <Parallax 
        bgImage={BusinessImg2} 
        bgImageAlt="an image of two women doing a transaction in a store" 
        strength={800}
        className='relative h-screen'
        >
        <div className='flex items-center justify-center absolute h-screen w-full'>
            <div className='
                 flex flex-col justify-center items-center text-center bg-[#121212] max-h-[200px] p-4 text-lg rounded-lg'
                >
                <p className='uppercase text-[#F8F8F8] text-xl p-2 md:p-3 mb-2'>Do you need some help to track your monthly expenses?</p>
                <p className='text-[#C0C0C0] text-md p-2'>Do not forget to check out our services!</p>
                <Button>
                    <a href="/">Our services</a>
                </Button>
            </div>
        </div>
    </Parallax>
  )
}

export default ImgParallaxTwo