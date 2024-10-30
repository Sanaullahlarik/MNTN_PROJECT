import React, { Component } from 'react'
import HikerImg from "../Assets/01.png"
import { Icon } from '@iconify/react';
import NumberOneImg from "../Assets/1.png"

export class Hiker extends Component {
  render() {
    return (
      <>
      <div className='bg-black d-flex justify-content-center gap-5 align-items-center position-relative'>
        <div className='text-white me-5'> 
        <span className='text-warning'><Icon className=' text-warning' icon="vaadin:line-h" /> Get Started</span>
        <h3 className='display-4 fw-normal'>What level of  hiker <br /> are you?</h3>
        <p>Determining what level of hiker you are can be an important tool when <br /> planning future hikes. This hiking level guide will help you plan hikes <br /> according to different hike ratings set by various websites like All Trails and <br /> Modern Hiker. What type of hiker are you – novice, moderate, advanced <br /> moderate, expert, or expert backpacker? </p>
        <span className='text-warning'>read more <Icon className='ms-1 text-warning' icon="icon-park-outline:arrow-right" /></span>
        </div>
        <div className='hiker-image'>
        <img className='img-fluid w-75 h-50 ms-5' src={HikerImg} alt="" />
        </div>
        <div className='image-num-1 position-absolute'>
         <img className='' src= {NumberOneImg} alt=""/>
      </div>
      </div>
      </>
    )
  }
}

export default Hiker;