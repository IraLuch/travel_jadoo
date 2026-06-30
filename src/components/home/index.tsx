import { motion } from "framer-motion";
import  { PlayIcon } from "@heroicons/react/16/solid";
import HomeImage from "../../assets/home.png";

import Drag  from "./Drag";







 const Home = () => {

  return (
    <section id="home" className="px-5">
      <div className="relative overflow-hidden">
        <motion.div className="absolute "
           initial="hidden"
            whileInView="visible"
            animate={{ opacity: 1, scale: 1 }}
             variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
        {Drag()}
        </motion.div>
        <div className="flex gap-5 flex-col md:flex-row">
          <motion.div
            className="flex flex-col gap-7 md:py-24 max-w-[600px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="uppercase text-primary-100 font-bold text-xl">
              Best Destinations around the world
            </p>
            <p className="font-bold text-[50px]/13  md:text-[84px]/23">Travel, enjoy and live a new and full life</p>
            <p className="font-medium text-secondary-100">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
            <div className="flex gap-4 items-center">
                <button  className="text-white drop-shadow-xl drop-shadow-secondary-200/50 mr-9 text-lg rounded-2xl font-medium cursor-pointer bg-secondary-200 p-[19px] rad">Find out more</button>
                <div className=" flex items-center gap-2 cursor-pointer">
                    <div className=" overflow-hidden rounded-full flex items-center drop-shadow-xl drop-shadow-secondary-300/50 justify-center bg-secondary-300 h-[52px] w-[52px]">
                        <PlayIcon className="h-6 w-6 text-white"></PlayIcon>
                    </div>
                    <p className="font-medium text-secondary-100 text-[17px]">Play Demo</p>
                </div>
            </div>
          </motion.div>
          <motion.div
          initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }} className="max-w-[700px] max-h-[700px]">
            <img className="w-full h-full  object-cover"  src={HomeImage} alt="Home" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default Home