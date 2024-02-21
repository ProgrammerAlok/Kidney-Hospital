import React from 'react'
import './style.css'

const CardLG = ({ title, description, image, avatar, name, date }) => {
    return (
        <div className='card-lg'>
            <div>
                <img src={image} alt="" className=' h-full w-full' />
            </div>
            <div className='lg:w-[90%] justify-self-center my-auto pl-4'>
                <h1>{title}</h1>
                <p>
                    {description} <span> Read More </span>
                </p>
                <div className='flex gap-2 mt-4'>
                    <div>
                        <img src={avatar} alt="" />
                    </div>
                    <div>
                        <h4>{name}</h4>
                        <h5>{date}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardLG