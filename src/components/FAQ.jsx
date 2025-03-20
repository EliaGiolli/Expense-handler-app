import React from 'react'
import Button from './Button'

function FAQ({ isOpen, onClick, question, response }) {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <Button
        onClick={onClick}
        variant='accordion'
      >
        <span>{question}</span>
        <span className="transform transition-transform duration-200" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
          ▼
        </span>
      </Button>
      {isOpen && (
        <div className="bg-white p-4 border border-[#C0C0C0]">
          <p>{response}</p>
        </div>
      )}
    </div>
  )
}

export default FAQ