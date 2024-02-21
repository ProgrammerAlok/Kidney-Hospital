import Heading1 from 'components/heading/Heading1'
import './style.css'
import { RightArrow } from 'assets/svg/Icon'
import DoctorImg from '../../assets/images/Doctor-image11.png'
import GrpAvatar from '../../assets/images/grp-avatar.svg'

const HomeAbout = () => {
  return (
    <div className='home-about-container-wrapper lg:py-[120px] py-[52px]'>
        <div className='home-about-container max-w-[90%] md:max-w-[80%] mx-auto md:grid md:grid-cols-2 flex flex-col-reverse gap-10'>
            <div className='relative left mt-10 md:mt-0'>
                <div className='absolute -top-10 left-0 md:top-14 md:-left-8 shadow-bs4 bg-white-A700 p-4 rounded-xl flex flex-col justify-center items-center gap-2'>
                    <h4>Our Happy Clients</h4>
                    <p>150+ Clients</p>
                    <div className=''><img src={GrpAvatar} alt="group-avatar" /></div>
                </div>
                <div className=' h-full w-full flex items-end justify-end'>
                    <div className='doctor-image overflow-hidden  rounded-tr-[15%] rounded-bl-[15%] border-[12px] border-white-A700 right-0 bottom-0 aspect-4/3 w-[90%] '>
                        <img 
                            src={DoctorImg} 
                            alt="doctor-image" 
                            className=''
                        />
                    </div>
                </div>
            </div>
            <div className='right flex flex-col justify-center gap-8'>
                <Heading1
                    subHeading={`About hospital`}
                    headingStart={`Super `}
                    headingMid={`Speciality `}
                    headingLast={`Hospital Of South Gujarat.`}
                />
                <div>
                    <p>
                        Dhameliya Kidney Hospital has born out of the need for a good center which catered to patients with complicated kidney diseases in Surat. It is a judicious blend of high end technology, world class expertise and outstanding personalized care. With time it has become best kidney hospital in SURAT. Hospital with all facilities under one roof provides for greater efficiency in meeting the overall needs of a patient. patients with complicated kidney diseases in Surat. It is a judicious blend of high end technology
                    </p>
                </div>
                <button className='flex justify-center items-center gap-2'>Read More <RightArrow/></button>
            </div>
        </div>
    </div>
  )
}

export default HomeAbout