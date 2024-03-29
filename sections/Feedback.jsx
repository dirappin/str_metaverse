'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} flex flex-col mx-auto lg:flex-row gap-6`}
    >
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="flex flex-[0.5] lg:mx-w-[370px] justify-end flex-col gradient-05 sm:p-8 p-8 rounded-[32px] relative border-[1px] border-[#6a6a6a]"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] text-white sm:leading-[40px] leading-[36px]">Samantha</h4>
          <p className="text-white mt-8 font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px]">Founder Metaverus</p>
          <p className="text-white mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px]">
            “With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="justify-center relative items-center flex-1 flex"
      >
        <img src="planet-09.png" alt="planet-09" className="w-full lg:h-[610px] h-auto object-cover rounded-[40px] min-h-[210px]" />
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]s"
        >
          <img src="/stamp.png" alt="stamp" className="object-contain w-[100px] sm:w-[155px] sm:h-[155px] h-[100]" />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
