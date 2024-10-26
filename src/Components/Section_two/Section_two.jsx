import React from 'react';
import Section_twoImg from "../Assets/02.png";
import { Icon } from '@iconify/react';

export const Section_two = () => {
  return (
    <>
    <div className='bg-black pt-5'>
    <div className='d-flex justify-content-center gap-5 align-items-center pt-5'>
      <div className='hiker-image pt-5'>
          <img className='pt-5 img-fluid w-75 h-50' src={Section_twoImg} alt="" />
        </div>
        <div className='text-white me-5 pt-5'>
          <span className='text-warning'><Icon className=' text-warning' icon="vaadin:line-h" /> GEt Started</span>
          <h3 className='display-4 fw-normal'>What level of  hiker <br /> are you?</h3>
          <p>Determining what level of hiker you are can be an important tool when <br /> planning future hikes. This hiking level guide will help you plan hikes <br /> according to different hike ratings set by various websites like All Trails and <br /> Modern Hiker. What type of hiker are you – novice, moderate, advanced <br /> moderate, expert, or expert backpacker? </p>
          <span className='text-warning'>Raed more <Icon className='ms-1 text-warning' icon="icon-park-outline:arrow-right" /></span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Section_two;
