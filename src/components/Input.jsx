import React from 'react'

function Input({ value, onChange, type = "text", placeholder }) {
  return (
    <input 
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className='bg-white border border-[#D4AF37] px-3 py-2 rounded'
    />
  )
}

export default Input