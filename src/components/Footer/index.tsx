import { div } from "framer-motion/client";
import footerLinks from "../../utils/FooterLinks";
import socialIcon from "../../utils/SocialIcons";
import storeBadgeImgs from "../../utils/StoreBadgeImgs";



const Footer = () => {
    return <section id='footer'>
        <div className="flex flex-col gap-20">
            <div className="flex gap-10 justify-between lg:flex-row flex-col items-center ">
                <div className="max-w-[200px] md:text-left text-center">
                <h1 className="font-medium text-[44px]"> Jadoo.</h1>
                <p className="font-medium text-[13px] text-secondary-100">Book your trip in minute, get full
Control for much longer.</p>
                </div>
                <ul className="flex gap-16 flex-col md:flex-row">
                   {footerLinks.map(l => (
                    <div className="flex flex-col gap-8">
                        <h4 className="font-bold text-[22px]">{l.title}</h4>
                       <ul className="flex flex-col gap-3"> 
                        {l.links.map(i => (
                            <li className="text-secondary-100 font-medium text-[18px]"><a href="#">{i}</a></li>
                        ))  }
                        </ul> 
                    </div>
                   ))}
                </ul>
               <div className="flex flex-col gap-6">
                <ul className="flex gap-6 items-center justify-center lg:justify-start">
                    {socialIcon.map(i => (
                        <li className={` ${i.bg} flex items-center justify-center bg-white shadow-[0_5px_5px_rgba(0,0,0,0.10)] rounded-full w-[41px] h-[41px] overflow-hidden`}>
                            <img className=" " src={i.src} alt={i.alt} />
                        </li>
                    ))}
                </ul>
              <div className="flex flex-col gap-4">
                    <span className="text-secondary-100 lg:text-left text-center font-medium text-[20px]">Discover our app</span>
                    <ul className="flex gap-[7px]">
                     {storeBadgeImgs.map(i => (
                        <li className="w-[100px] h-[35px] overflow-hidden rounded-4xl">
                           <a href="#">
                                <img className="w-full h-full" src={i.src} alt={i.alt} />
                           </a>
                            </li>
                     ))}
                    </ul>
              </div>
               </div>
            </div>
            <p className="text-center font-medium text-secondary-100 text-[13px] mb-5">All rights reserved@jadoo.co</p>
        </div>
    </section>
}

export default Footer