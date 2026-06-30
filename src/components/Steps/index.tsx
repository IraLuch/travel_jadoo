import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { stepsItemData } from "../../utils/StepsItemData";
import TripCart from "../TripCard/TripCard";
import StepItem from "./StepItem";

const Steps = () => {
    return (
        <section id="steps"  className="px-5">
            <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
                <motion.div className="flex flex-col gap-7 lg:mr-[140px] md:max-w-[510px]"
                initial={{opacity: 0}}
            whileInView={{opacity: 1}}
             viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}>
                    <SectionHeader isCenter={false} isUppercase={false} subtitle="Book your next trip 
in 3 easy steps" title="Easy and Fast"></SectionHeader>
                    <ul className="flex flex-col gap-[48px]">
                        {stepsItemData.map(i => (
                            <StepItem  desc={i.desc} icon={i.icon} iconBg={i.iconBg} 
                             title={i.title} key={i.id}></StepItem>
                        ))}
                    </ul>
                </motion.div>
                <motion.div 
                 initial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
                className="lg:mt-[100px] md:p-4 p-1.5">
                    <TripCart></TripCart>
                </motion.div>
            </div>
        </section>
    )
}
export default Steps