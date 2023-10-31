'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, title, imgUrl, index, active, handleclick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} flex justify-center items-center transition-[flex] h-[700px] min-w-[170px] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleclick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute w-full object-cover h-full rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="z-0 font-semibold sm:text-[26px] text-[18px] absolute text-white lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute justify-start flex-col bottom-0 w-full p-8 bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}>
          <img src="/headset.svg" alt="headset" className="object-contain w-1/2 h-1/2" />
        </div>
        <p className="font-normal text-white uppercase text-[16px] leading-[20px]">Enter the Metaverse</p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">{title}</h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
