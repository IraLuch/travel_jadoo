
import Telegram from '../../assets/Telegram.png'
import Decore from '../../assets/plus-subscribe.png'

const Subscribe = () => {
    return <section id='subscribe'>
      <div className='relative '>

                    <img className=' absolute hidden xl:block -bottom-15 -right-21' src={Decore} alt="Decore" />
          
                    <img className='z-10 absolute -top-6  -right-5 overflow-hidden' src={Telegram} alt="Telegram" />

            <div className="flex flex-col relative items-center overflow-hidden bg-secondary-900 rounded-3xl rounded-tl-[30%] py-[70px] gap-16 md:px-[150px] px-[50px]
             before:content-[''] before:absolute before:z-5
                    lg:before:w-[380px] before:w-[270px] before:h-[390px] before:-bottom-45 lg:before:left-45 before:left-0 before:opacity-20
                    before:bg-[url('/circles2.png')] before:bg-contain before:bg-no-repeat
                    
                     after:content-[''] after:absolute after:z-5
                    md:after:w-[380px] after:w-[270px] after:h-[390px] after:top-0 after:right-0 md:after:-right-25  after:opacity-20
                    after:bg-[url('/circles.png')] after:bg-contain after:bg-no-repeat
                    ">
                
                <h2 className="font-semibold md:text-[33px] text-[24px] text-center text-secondary-100">
    Subscribe to get information, latest news and other
    interesting offers about Jadoo
                </h2>
                <div className="flex flex-col gap-[24px] md:flex-row relative z-10">
                    <div className = "absolute before:content-[''] before:absolute not-even:before:w-[21px] before:h-[18px] top-[28px] left-[20px] before:bg-[url('/Message.png')] before:bg-contain before:bg-no-repeat"></div>
                    <input type="text" placeholder="Your email" className="bg-white md:w-[420px] w-[250px] py-[25px] pl-[60px] pr-[20px] rounded-2xl focus:outline-none"/>
                    <button className="py-[20px] px-[50px] bg-secondary-150 rounded-3xl text-white text-[17px] font-semibold cursor-pointer">Subscribe</button>
                </div>
            </div>
      </div>
    </section>
    
}

export default Subscribe