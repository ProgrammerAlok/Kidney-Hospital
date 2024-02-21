import Heading1 from "components/heading/Heading1"
import Branch1 from 'assets/images/branch-1.png'
import Branch2 from 'assets/images/branch-2.png'
import Branch3 from 'assets/images/branch-3.png'
import Branch4 from 'assets/images/branch-4.png'

const Data = [
    {
        image: Branch1,
        title: 'Branch 1 : Lal Darwaja',
        position: 'justify-start mt-20 md:mt-0 ml-[10%] md:ml-0',
    },
    {
        image: Branch2,
        title: 'Branch 2 : Udhna Darwaja',
        position: 'justify-end mr-[10%] md:mr-0',
    },
    {
        image: Branch3,
        title: 'Branch 3 : Adajan',
        position: 'justify-start mr-[10%] md:mr-0',
    },
    {
        image: Branch4,
        title: 'Branch 4 : Amroli',
        position: 'justify-end mt-[4rem] md:mt-0',
    },
];

const Card1 = ({ image, title, position }) => {

    return (
        <div className={`${position} flex flex-col `}>
            <div className={`flex justify-center items-center`}>
                <img 
                    className="rounded-[1rem] overflow-hidden h-[20.875rem] w-[16.875rem]" 
                    src={image} 
                    alt="branch-image" 
                />
            </div>
            <h3 className="w-full text-center font-fredoka font-[500] text-[1.5rem] text-[#000]">{title}</h3>
        </div>
    );
}

const Card2 = ({ position }) => {

    return (
        <div className={`${position} bg-gradient8 rounded-[1rem] w-[21.375rem] h-[20.875rem] overflow-hidden`}></div>
    );
}

const AboutGallery = () => {
  return (
    <div className="py-[6rem] overflow-x-hidden">
        <div className="relative">
            <div className="md:mb-10">
                <Heading1
                    subHeading={`Gallery`}
                    headingStart={`See Our `}
                    headingMid={`Gallery`}
                    position="text-center"
                />
            </div>
            <div className=" overflow-x-hidden">
                <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:h-[36rem] overflow-hidden">
                    {Data.map((e, ind) => (
                        <Card1 key={ind} {...e} />
                    ))}
                </div>

                <Card2 position={`absolute top-[6%] md:top-[10%] -left-[10%] -z-10`} />
                <Card2 position={`absolute bottom-[5%] md:bottom-[15%] -right-[10%] -z-10`} />
                
            </div>
        </div>
    </div>
  )
}

export default AboutGallery