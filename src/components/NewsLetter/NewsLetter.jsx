import React from 'react'
import './style.css'
import { DiamondIcon } from 'assets/svg/Icon'
import Ellipse1 from '../../assets/images/Ellipse1.svg'
import Ellipse2 from '../../assets/images/Ellipse2.svg'
import Ellipse3 from '../../assets/images/Ellipse3.svg'
import Ellipse4 from '../../assets/images/Ellipse4.svg'
import Ellipse5 from '../../assets/images/Ellipse5.svg'

const NewsLetter = () => {
  return (
    <div className=' newsletter-container flex justify-center items-center flex-col lg:py-28 py-[52px]'>
        <div className='relative flex justify-center items-center flex-col w-[90%] gap-4 py-10'>
            <h1 className=' font-fredoka text-[32px] lg:text-[50px]'>Newsletter</h1>
            <h3>Get Smarter About No-Code</h3>
            <p className='w-[90%] md:w-[70%] lg:w-[50%] dia2'>
                The best No-Code tips & tricks, for webflow & Framer developers from experts to beginner. Join our 3k community by subscribing
            </p>
            <div className='flex flex-col md:flex-row items-center gap-4 w-[80%] md:w-[60%] lg:w-[40%]'>
                <input 
                    type="text" 
                    placeholder='Enter your email'
                    className='w-full'
                />
                <button>Subscribe</button>
            </div>

            {/* svg icons */}
            <div className='absolute top-[55%] left-[25.5%] hidden lg:block'> <DiamondIcon/> </div>
            <div className='absolute top-[63%] right-[29%] hidden lg:block'> <DiamondIcon/> </div>
            <div className='absolute top-[10%] right-[5%] md:hidden'> <img src={Ellipse1} alt="ellipse1" /> </div>
            <div className='absolute top-[10%] left-[5%]'> <img src={Ellipse1} alt="ellipse1" /> </div>
            <div className='absolute top-[15%] left-[30%]'> <img src={Ellipse2} alt="ellipse1" /> </div>
            <div className='absolute bottom-[15%] md:left-[15%] left-[5%]'> <img src={Ellipse3} alt="ellipse1" /> </div>
            <div className='absolute top-[45%] right-[1%] hidden md:block'> <img src={Ellipse4} alt="ellipse1" /> </div>
            <div className='absolute bottom-[15%] md:right-[15%] right-[5%]'> <img src={Ellipse5} alt="ellipse1" /> </div>
        </div>
    </div>
  )
}

export default NewsLetter