import React from 'react'
import { FaFacebookF } from "react-icons/fa"
import { IoLogoInstagram } from "react-icons/io5"
import { FaLinkedinIn } from "react-icons/fa"
import { FaGithub } from 'react-icons/fa'
function Footer() {
  return (
    <>
        <footer className="bg-[#121212] text-[#F8F8F8] p-3">
            <div className="w-full px-4 py-8">
                <div className="text-center space-y-4">
                        
                  <h6 className="text-[#D4AF37] text-2xl md:text-xl">PennyWise</h6>
                    
                  <h5 className="text-3xl md:text-3xl">Let's collaborate!</h5>
                  <p className="paragraph">Mail: info@pennywise.com</p>
                      <div className="flex justify-center gap-8">
                          <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer">
                              <IoLogoInstagram className="text-[#D4AF37] hover:text-[#F8F8F8] text-4xl md:text-5xl p-2" />
                          </a>
                          <a href="https://m.me/your-username" target="_blank" rel="noopener noreferrer">
                              <FaFacebookF className="text-[#D4AF37] hover:text-[#F8F8F8] text-4xl md:text-5xl p-2" />
                          </a>
                          <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
                              <FaLinkedinIn className="text-[#D4AF37] hover:text-[#F8F8F8] text-4xl md:text-5xl p-2" />
                          </a>
                          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                              <FaGithub className="text-[#D4AF37] hover:text-[#F8F8F8] text-4xl md:text-5xl p-2" />
                          </a>
                      </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer