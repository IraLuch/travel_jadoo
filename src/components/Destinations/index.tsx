import { motion } from "framer-motion";
import  SectionHeader  from "../SectionHeader";
import Decore from '../../assets/Decore.png'
import { destinationsData } from "../../utils/DestinationsData";
import  DestinationCard  from "./DestinationCard";
 const Destinations = () => {

    return (
        <section id="destinations" className="px-5  relative" >
            <div>
                <motion.div className="flex flex-col gap-3.5"
                 initial={{opacity: 0}}
            whileInView={{opacity: 1}}
             viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}>
                    <SectionHeader title="Top Selling" subtitle="Top Destinations" isUppercase={false} isCenter={true}></SectionHeader>
                </motion.div>
                <ul className="flex flex-col md:flex-row gap-14 my-3.5 md:my-8 items-center justify-around">
                    {destinationsData.map(d => (
                        <DestinationCard id={d.id} duration={d.duration} image={d.image}
                        price={d.price} title={d.title} key={d.id}></DestinationCard>
                    ))}
            <img className="absolute right-2 -z-10 top-[50%]" src={Decore} alt="Decore" />
                </ul>
            </div>
        </section>
    )
}
export default Destinations