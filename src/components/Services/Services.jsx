import Heading1 from 'components/heading/Heading1';
import './style.css';
import KidneyStone from '../../assets/images/kidney-stone-image.png';
import Prostate from '../../assets/images/prostate-image.png';
import UroCheck from '../../assets/images/uro-image.png';
import NEWithNumber from '../../assets/images/NEWithNumber.svg';
import { NextArrow, PrevArrow } from 'assets/svg/Icon';

const NEArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M10.8271 8.49219L17.2654 8.49219L17.2654 14.9304" stroke="white" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.24902 17.5078L17.1745 8.58236" stroke="white" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);

const NEArrow1 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path d="M10.8271 8.49219L17.2654 8.49219L17.2654 14.9304" stroke="#385182" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.24902 17.5078L17.1745 8.58236" stroke="#385182" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);

const Card1 = ({ title, description, image }) => {
    return (
        <div className='card bg-blue_gray-700_19 p-4 rounded-lg hidden md:block'>
            <div className='flex justify-between items-center py-2'>
                <h1 className='text-blue_gray-900'>{title}</h1>
                <div className='bg-blue_gray-700 rounded-full w-fit p-2 cursor-pointer' > <NEArrow/> </div>
            </div>
            <div className='my-4 text-blue_gray-400'>{description}</div>
            <div>
                <img 
                    className='w-full h-full' 
                    src={image} 
                    alt="image-logo" 
                />
            </div>
        </div>
    );
}

const Card2 = ({ title, description, image }) => {
    return (
        <div className='card bg-blue_gray-700 p-4 rounded-lg rounded-bl-[46%] relative'>
            <div className='flex justify-between items-center py-2'>
                <h1 className='text-white-A700'>{title}</h1>
                <div className=' bg-white-A700 rounded-full w-fit p-2 cursor-pointer' > <NEArrow1 /> </div>
            </div>
            <div className='my-4 text-blue_gray-200'>{description}</div>
            <div>
                <img 
                    className='w-full h-full' 
                    src={image} 
                    alt="image-logo" 
                />
            </div>
            <div className='absolute left-0 bottom-0 w-[30%] h-[30%]'>
                <img className='h-full w-full' src={NEWithNumber} alt="" />
            </div>
        </div>
    );
}

const Services = () => {
  return (
    <div className='home-services-container-wrapper bg-gray-100 py-16'>
        <div className='home-services-container max-w-[90%] mx-auto'>
            <Heading1
                subHeading={`services`}
                headingStart={`Our `}
                headingMid={`Medical `}
                headingLast={`Services`}
                position='text-center'
            />

            <div className='grid md:grid-cols-3 md:gap-4 py-8'>
                <div> 
                    <Card1 
                        title={`Kidney Stone`} 
                        description={`We are providing the cerdiology services for our patient that very much. We are providing the cerdiology services for our patient that very much. `}
                        image={KidneyStone}
                    /> 
                </div>
                <div> 
                    <Card2 
                        title={`Kidney Stone`} 
                        description={`We are providing the cerdiology services for our patient that very much. We are providing the cerdiology services for our patient that very much. `}
                        image={Prostate}
                    /> 
                </div>
                <div> 
                    <Card1 
                        title={`Kidney Stone`} 
                        description={`We are providing the cerdiology services for our patient that very much. We are providing the cerdiology services for our patient that very much. `}
                        image={KidneyStone}
                    /> 
                </div>
            </div>

            <div className='flex justify-between items-center'>
                <div className='cursor-pointer'> <PrevArrow/> </div>
                <div className='cursor-pointer'> <NextArrow/> </div>
            </div>
        </div>
    </div>
  )
}

export default Services