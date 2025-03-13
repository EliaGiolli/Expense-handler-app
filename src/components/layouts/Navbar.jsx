import React from 'react'

function Navbar() {
  return (
    <nav className='nav-wrapper'>
        <div className='rounded-md p-2 mb-8'>
            <img src="../../../public/img/logo.png" alt="logo" className='logo'/>
        </div>
        <div className='w-full mt-20'>
            <ul className='flex flex-col justify-around items-center text-center space-y-4 w-full'>
                <li className='nav-items'>About</li>
                <li className='nav-items'>Services</li>
                <li className='nav-items'>Contacts</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar