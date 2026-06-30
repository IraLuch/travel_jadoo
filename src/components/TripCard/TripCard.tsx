import Trip from '../../assets/Trip.png'
import TripIcons from '../../utils/TripIcons';
import Building from '../../assets/Building.png'
import HeartIcon from '../../assets/heart.svg?react';
import TripProgress from './TripProgress';

const TripCart = () => {

    return ( <div className='relative'>
<div className="absolute   xl:-top-10 xl:-right-13 md:w-[350px] w-[200px]  h-[360px] bg-[#59B1E6] rounded-full blur-[60px] opacity-50 -z-10" />
        <div className='flex flex-col gap-6 pt-5 px-6 pb-8 h-[400px] md:w-[370px] w-[280px] z-10 drop-shadow-2xl rounded-3xl bg-white
        transition-all duration-300 hover:scale-105'>
            <div>
                <img src={Trip} alt="Trip" />
            </div>
            <div className='font-medium'>
                <h3 className='text-[18px]'>Trip To Greece</h3>
                <div className='text-secondary-100 mb-[21px]'>
                    <span className='border-r pr-[3px] '>14-29 June</span>
                    <span className='pl-[13px]'>by Robbin joseph</span>
                </div>
                <ul className='flex gap-4 mb-7'>
                   {
                    TripIcons.map(i => (
                        <li className='w-9 h-9 rounded-full flex justify-center items-center bg-secondary-500'> <img key={i.alt}  src={i.src} alt={i.alt} /></li>
                    ))
                   }
                </ul>
                <div className='flex justify-between'>
                    <div className='flex gap-3.5 w-full'>
                        <img src={Building} alt="Building" />
                        <span className=' text-secondary-100 font-medium'>24 people going</span>
                    </div>
                 <div className='group relative '> 
                     <HeartIcon className="w-6 h-6 cursor-pointer transition-all duration-200 hover:text-secondary-700 hover:fill-secondary-700 hover:scale-105" />
                    <TripProgress></TripProgress>
                    </div>
                </div>
            </div>
        </div>
                  
    </div>)
}

export default TripCart