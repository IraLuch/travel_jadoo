import { motion } from 'framer-motion';
import Arrow from '../../assets/arrow.png'

type Props = {
    id: number
    image: string
    title: string
    price: string
    duration: string
}

 const DestinationCard = ({id, image, title, price, duration}:Props) => {
  return  <motion.li 
  key={id}
              initial={{ opacity: 0, y: -50}}
              whileInView={{ opacity: 1, y: 0}}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: id * 0.2, duration: 0.5 }}
  className="drop-shadow-xl rounded-3xl bg-white flex flex-col gap-2 hover:scale-110 transition-scale duration-500">
            <div className='max-w-[320px] max-h-[320px] overflow-hidden  rounded-2xl'>
                <img className='w-full h-full object-cover object-top'  src={image} alt={title} />
            </div>
          <div className='flex flex-col px-[20px] pt-[27px] pb-[42px] gap-[19px] text-[18px] font-medium text-secondary-100'>
                <div className="flex justify-between ">
                    <h3>{title}</h3>
                    <span>{price}</span>
                </div>
                <div className='flex items-center gap-3.5 '>
                    <div>
                        <img src={Arrow} alt="Arrow" />
                    </div>
                    <p>{duration}</p>
                </div>
          </div>
    </motion.li>
}

export default DestinationCard