import React from 'react'

export const Footer = () => {
  return (
   <>
   <div className='bg-black'>
    <div class="container pt-5">
  <footer className="row justify-content-between row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
    <div class="col mb-3 w-25">
      <h3 className='text-white mb-3'>MNTN</h3>
      <p className='mb-5 text-white'>Get out there & discover your next slope,destination!</p>
      <p class="text-secondary">Copyright 2023 MNTN, Inc.Terms & Privacy</p>
    </div>

    <div class="col mb-3">

    </div>
    <div className="col mb-3">
      <h5 className='text-warning fs-4 fw-normal'>More on The Blog</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2 text-white fs-6 fw-normal">About MNTN</li>
        <li class="nav-item mb-2 text-white fs-6 fw-normal">Contributors & Writers</li>
        <li class="nav-item mb-2 text-white fs-6 fw-normal">Write For Us</li>
        <li class="nav-item mb-2 text-white fs-6 fw-normal">Contact Us</li>
        <li class="nav-item mb-2 text-white fs-6 fw-normal">Privacy Policy</li>
      </ul>
    </div>

    <div className="col mb-3">
      <h5 className='text-warning fs-4 fw-normal'>More on MNTN</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2 text-white fs-6 fw-normal">The Team</li>
        <li class="nav-item mb-2 text-white fs-6 fw-normal">Jobs</li>
        <li class="nav-item mb-2 text-white fs-6 fw-normal">Press</li>
      </ul>
    </div>
  </footer>
</div>
</div>
   </>
  )
}

export default Footer;
