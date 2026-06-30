import { motion } from "framer-motion";
import { serviceData } from "../../utils/ServiceData";
import SectionHeader from "../SectionHeader";
import  ServiceCard  from "./ServiceCard";
import Plus from '../../assets/plus.png'

 const Category = () => {

    return (
        <section id="category" className="px-5 relative">
            <img className="absolute top-0 right-10" src={Plus} alt="Plus" />
            <div>
                <motion.div className="flex flex-col gap-3.5"
                 initial={{opacity: 0}}
            whileInView={{opacity: 1}}
             viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}>
                    <SectionHeader title="CATEGORY" subtitle="We Offer Best Services" isUppercase={true} isCenter={true}></SectionHeader>
                </motion.div>
                <ul className="flex flex-col md:flex-row gap-3.5 my-3.5 md:my-8">
                    {serviceData.map(d => (
                        <ServiceCard id={d.id} key={d.id} desc={d.description} icon={d.iconSrc} title={d.title}></ServiceCard>
                    ))}
                </ul>
            </div>
             <div className="hidden w-[100px] h-[100px] rounded-tl-3xl rounded-br-3xl relative bottom-23 left-[23.5%] bg-secondary-300 md:block"></div>
        </section>
    )
}
export default Category