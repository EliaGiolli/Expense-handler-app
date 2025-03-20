import React, { useState } from 'react'
import FAQ from '../components/FAQ'
import FaqData from '../data/FaqData'

function AccordionSection() {
  const [openId, setOpenId] = useState(null)

  const handleClick = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div className='bg-white flex flex-col justify-center items-center mx-auto max-w-3xl w-full h-screen rounded-full shadow-lg p-3'>
      {FaqData.map((faq) => (
        <FAQ
          key={faq.id}
          isOpen={openId === faq.id}
          onClick={() => handleClick(faq.id)}
          question={faq.question}
          response={faq.response}
        />
      ))}
    </div>
  )
}

export default AccordionSection