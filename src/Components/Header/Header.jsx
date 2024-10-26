import React from 'react'
import { Icon } from '@iconify/react';

const Header = () => {

  return (
    <>
      <div className='hero-image'>
          <div className='d-flex justify-content-between mx-5 pt-4'>
            <h3 className='text-white'>MNTN</h3>
            <div>
              <ul className='list-unstyled d-flex'>
                <li className='text-white'>Equipment</li>
                <li className='px-3 text-white'>About us</li>
                <li className='text-white'>Blog</li>
              </ul>
            </div>
            <div>
              <Icon className='me-2 text-white' icon="gg:profile" />
              <span className='text-white'>Account</span>
            </div>
          </div>
          <div className='paragraph-text'>
          <p className='text-white text-start display-3 fw-medium'>Be prepared for The  <br /> Mountains And Beyond!</p>
          </div>
        </div>
    </>
  )
}

export default Header;