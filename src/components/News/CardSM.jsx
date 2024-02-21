import React from 'react'
import './style.css'
import { NEArrow } from 'assets/svg/Icon'

const CardSM = ({ image, title, url }) => {
  return (
    <div className='card-sm'>
        <div> <img src={image} alt="" className=' h-full w-full' /> </div>
        <div className=' self-center flex flex-col gap-2'>
            <h1>{title}</h1>
            <div className='flex gap-3'>
                <span>Read more</span>
                <NEArrow/>
            </div>
        </div>
    </div>
  )
}

export default CardSM