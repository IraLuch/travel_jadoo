import { motion } from "framer-motion";
import BrandsImgs from "../../utils/BrandsImgs";

const Brands = () => {
    return <section id="brands" className="px-5">
        <div>
            <ul className="flex gap-5 md:flex-row flex-col items-center justify-between" >
                {
                    BrandsImgs.map((b, index) => (
                        <motion.li
                           initial={{opacity: 0}}
            whileInView={{opacity: 1}}
             viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 * index, duration: 0.5}}
                        className="w-[200px] h-[86px] gap-5  p-2.5 rounded-3xl bg-white hover:drop-shadow-2xl hover:scale-105 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-200
                        "> 
                            <img className="" src={b.src} alt={b.alt} />
                        </motion.li>
                    ))
                }
            </ul>
        </div>
    </section>
}

export default Brands