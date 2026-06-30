import TripToRome from '../../assets/TripToRome.png'

const TripProgress = () => {
    return <div className='bg-white absolute z-20 top-[-100%] w-[263px] h-[130px] flex pt-[16px] pb-[22px] pr-[25px] pl-[20px] rounded-3xl drop-shadow-2xl gap-2.5 
    opacity-0 scale-95 pointer-events-none transition-all duration-300 right-0
      group-hover:opacity-100'>
        <div className='w-[50px] h-[50px] overflow-hidden rounded-full'>
            <img className='w-full h-full object-cover' src={TripToRome} alt="TripToRome" />
        </div>
        <div className='flex flex-col text-[14px] font-medium '>
            <h3 className=' text-secondary-100 mb-[3px]'>Ongoing</h3>
            <h2 className='text-[18px] mb-[7px]'>Trip to rome</h2>
            <p className='mb-[7px]'> 
                <span className='text-secondare-800'>40%</span> completed
            </p>
            <div className='h-[5px] w-[156px] bg-gray-100  relative rounded-full overflow-hidden'>
                <span className='absolute h-full w-[40%] bg-secondare-800'></span>
            </div>
        </div>
    </div>
}

export default TripProgress