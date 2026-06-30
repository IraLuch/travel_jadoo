import { motion } from "framer-motion";

type Props = {
    icon: string, 
    iconBg: string,
    title: string,
    desc:string
}

const StepItem = ({ title, desc,icon,iconBg}:Props) => {
    return( <motion.li
      initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
    className="flex  flex-row gap-[20px]">
        <div className={`w-12 h-12 shrink-0 ${iconBg} rounded-2xl flex items-center  justify-center overflow-hidden`}>
            <img className="w-[22px] block" src={icon} alt={title} />
        </div>
        <div className="text-secondary-100 flex flex-col gap-1">
            <h3 className="font-bold">{title}</h3>
            <p className="font-normal text-base/4">{desc}</p>
        </div>
    </motion.li>)
}
export default StepItem