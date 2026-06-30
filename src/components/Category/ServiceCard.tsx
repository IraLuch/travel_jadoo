import { motion } from "framer-motion";

type Props = {
    id: number
    icon: string
    title: string
    desc: string
}
 const ServiceCard = ({id, icon, title, desc}: Props) => {
    return(
        <motion.li 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1}}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: id * 0.2, duration: 0.5 }}
        className="flex flex-col gap-1.5 items-center bg-white rounded-2xl lg:p-[44px] p-[20px] transition-all z-10 duration-700 hover:shadow-lg ">
            <div className="w-[92px] h-[78px] overflow-hidden object-cover object-center mb-7" >
                <img className="w-full h-full" src={icon} alt={title} />
            </div>
            <h2 className="mb-3.5 text-[20px] font-semibold text-center" >{title}</h2>
            <p className="text-secondary-100 font-medium text-center">{desc}</p>
        </motion.li>
    )
}

export default ServiceCard