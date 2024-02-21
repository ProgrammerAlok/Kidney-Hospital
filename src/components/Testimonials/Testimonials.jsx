import { Dot1, Dot2, Dot3, InvertedCommaEndLG, InvertedCommaEndSM, InvertedCommaStartLG, InvertedCommaStartSM, PlayCircle1, PlayCircle2, Star2 } from 'assets/svg/Icon'
import './style.css'

const Testimonials = () => {
  return (
    <div className='home-testimonials-wrapper'>
        <div className='home-testimonials max-w-[90%] md:max-w-[70%] lg:max-w-[50%] relative'>
            <h4>testimonial</h4>
            <h1>
                What Our <span> Patient Says </span>
            </h1>
            <div className='avatar'></div>
            <h3>Raymond Galario</h3>
            <h5>Sydney, Australia</h5>
            <div className='relative w-full flex justify-center items-center py-4'>
                <div className='flex my-4'>
                    <Star2/>
                    <Star2/>
                    <Star2/>
                    <Star2/>
                    <Star2/>
                </div>

                <div className='absolute left-0 md:-left-16'> <PlayCircle1/> </div>
                <div className='absolute right-0 md:-right-16 top-[20%]'> <PlayCircle2/> </div>
            </div>
            <div className='relative'>
                <div className=''>
                    <p className='text-center'>
                        Now you can make an appointment with your doctor anywhere and anytime via online booking easier. Now you can make an appointment with your doctor anywhere and anytime via online booking easier.
                    </p>

                </div>
                <div className='absolute -top-5 left-0 md:-left-10'>
                    <div className='hidden md:block'><InvertedCommaStartLG/></div>
                    <div className='md:hidden'><InvertedCommaStartSM/></div>
                </div>
                <div className='absolute right-0 md:-right-10 -bottom-5'>
                    <div className='hidden md:block'><InvertedCommaEndLG/></div>
                    <div className='md:hidden'><InvertedCommaEndSM/></div>
                </div>
                
            </div>

            <div className='absolute top-0 left-0'> <Dot1/> </div>
            <div className='absolute top-0 right-0'> <Dot2/> </div>
            <div className='absolute top-[50%] right-[10%]'> <Dot3/> </div>

            <div className='absolute top-[40%] md:top-[50%] left-0 avatar1'> </div>
            <div className='absolute top-[30%] md:top-[20%] right-0 avatar2'> </div>
            
        </div>
    </div>
  )
}

export default Testimonials