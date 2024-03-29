'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img src={imgUrl} alt="planet-01" className="md:w-[270px] w-full object-cover h-[250px] rounded-[32px]" />
    <div className="w-full flex justify-between items-center">
      <div className="flex flex-1 flex-col md:ml-[62px] max-w-[650px]">
        <h4 className="font-normal text-white lg:text-[42px] text-[26px]">{title}</h4>
        <p className="font-normal text-[14px] lg:text-[20px] text-secondary-white">{subtitle}</p>
      </div>
      <div className="lg:flex hidden items-center w-[100px] h-[100px] bg-transparent justify-center rounded-full border-[1px] border-white">
        <img src="arrow.svg" alt="arrow" className="w-[40%] h-[40%] object-contain" />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
