import React from 'react'
import { Icon } from '@iconify/react';
const Header = () => {
  return (
    <>
      <div className="hero-image vh-100">
        <nav class="navbar navbar-expand-lg container">
          <div class="container-fluid">
            <a class="navbar-brand text-white" href="#">MNTN</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link text-white" aria-current="page" href="#">Equipment</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white">Blog</a>
                </li>
              </ul>
              <div class="d-flex text-white">
                <h6><Icon className='me-2 text-white' icon="gg:profile" />Account</h6>
              </div>
            </div>
          </div>
        </nav>
        <div className="container Hero-Section">
          <div className="row text-white">
            <div className="col-3 col-lg-3 d-flex flex-column">
              <div className="d-flex flex-column mt-5"><h6>Follow</h6></div>
              <span><Icon icon="ri:instagram-fill" /></span>
              <span><Icon icon="mdi:twitter" /></span>
            </div>
            <div className="col-6 col-lg-8">
            <h5 className='text-warning'><Icon className='ms-2 text-warning' icon="vaadin:line-h" />A HIKING GUIDE</h5>
              <h1 className='display-2 fw-medium'>Be Prepared for The  Mountains And Beyond!</h1>
              <h6 className='mt-4'>scroll down<Icon class="btn-group-vertical me-1 fs-3" icon="line-md:arrow-down" /></h6>
            </div>
            <div className="col-1 col-lg- d-flex flex-column text-end mt-5">
              <h6>Start</h6>
              <span>01</span>
              <span>02</span>
              <span>03</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;