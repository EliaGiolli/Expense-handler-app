import React from 'react'

function Button({onClick, children, variant='default'}) {
  const baseStyles = 'custom-button'

  const variantStyles = {
    default: "",
    button: "custom-button",
    accordion: "w-full bg-[#C0C0C0] hover:bg-[#D4AF37] text-[#f8f8f8] text-left text-xl md:text-md flex justify-between items-center p-4",
    expTracker: "bg-white hover:bg-yellow-200 border border-2 border-[#C0C0C0] text-red-500 hover:text-red-700",
  }


  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]}`}
      >
        {children}
    </button>
  )
}

export default Button