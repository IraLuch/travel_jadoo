import { useState } from "react";
import { testimonialsData } from "../../utils/TestimonialsData";
import SectionHeader from "../SectionHeader";
import CommentItem from "./CommentItem";
import { Pagination } from "./Pagination";
import Arrow from "../../assets/arrow.svg?react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [activeComment, setActiveComment] = useState<number>(1);


  const handleNextArrow = () => {
    if (activeComment < testimonialsData.length){
        setActiveComment(activeComment + 1)
    }
  }

  const handleArrowPrev = () => {
    if (activeComment > 1){
        setActiveComment(activeComment - 1)
    }
  }

  return (
    <section id="testimonials" className="px-5 ">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <motion.div className="flex flex-col gap-10 max-w-[410px] "
       initial={{opacity: 0}}
            whileInView={{opacity: 1}}
             viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
          <SectionHeader
            isCenter={false}
            isUppercase={true}
            subtitle="What people say
about Us."
            title="Testimonials"
          ></SectionHeader>
          <ul className="flex gap-5">
            {[1, 2, 3].map((l) => (
              <Pagination isActive={activeComment == l}></Pagination>
            ))}
          </ul>
        </motion.div>

      <motion.div className="flex md:gap-16 self-center md:flex-row flex-col-reverse"
      initial={{opacity: 0, x: 50}}
            whileInView={{opacity: 1, x: 0}}
             viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}>
            <ul className="ml-[10px] mr-[10px] mt-[30px] h-[400px] w-[250px] md:w-[540px] relative">
              {testimonialsData.map((t) => (
                <CommentItem
                  {...t}
                  isActive={activeComment === t.id}
                  isNext={t.id === activeComment + 1}
                ></CommentItem>
              ))}
            </ul>
            <div className="flex md:flex-col gap-14 justify-center">
              <Arrow onClick={handleArrowPrev} className={`rotate-180  cursor-pointer ${activeComment > 1 ? "stroke-black": "stroke-gray-400"} `}></Arrow>
              <Arrow onClick={handleNextArrow}  className={`transition-all duration-200 cursor-pointer ${activeComment < testimonialsData.length ? "stroke-black": "stroke-gray-400"}`}></Arrow>
            </div>
      </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
