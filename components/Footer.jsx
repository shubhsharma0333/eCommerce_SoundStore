import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 The Sound Store All rights reserved</p>
      <p className='icons'>
        <AiOutlineTwitter />
        <AiFillInstagram />
      </p>
    </div>
      
  )
}

export default Footer