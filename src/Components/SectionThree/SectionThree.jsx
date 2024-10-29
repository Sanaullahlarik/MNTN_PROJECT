import React from 'react';
import { Icon } from '@iconify/react';
import WatchImg from "../Assets/03.png"
import NumberThreeImg from "../Assets/3.png"

export const SectionThree = () => {
  return (
    <>
    <div className='bg-black d-flex justify-content-center gap-5 align-items-center pt-5 position-relative'>
        <div className='text-white me-5 pt-5'> 
          <span className='text-warning fs-3 fw-fw-normal'><Icon className='ms-2 text-warning' icon="vaadin:line-h" /> where you go is the key</span>
        <h3 className='display-4 fw-normal'>Understand Your <br /> Map & Timing</h3>
        <p className='mt-3'>Determining what level of hiker you are can be an important tool when <br /> planning future hikes. This hiking level guide will help you plan hikes <br /> according to different hike ratings set by various websites like All Trails and <br /> Modern Hiker. What type of hiker are you – novice, moderate, advanced <br /> moderate, expert, or expert backpacker? </p>
        <span className='text-warning'>read more <Icon className='ms-1 text-warning' icon="icon-park-outline:arrow-right" /></span>
        </div>
        <div className='hiker-image pt-5'>
        <img className='img-fluid w-75 h-50 ms-5' src={WatchImg} alt="" />
        </div>
        <div className='image-num-3 position-absolute'>
         <img className='' src= {NumberThreeImg} alt=""/>
      </div>
      </div>
    </>
  )
}

export default SectionThree;
