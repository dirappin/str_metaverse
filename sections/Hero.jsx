'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} pl-6 sm:pl-16`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ one: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex flex-col justify-center items-center relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          METAVERSE
        </motion.h1>
        <motion.div variants={textVariant(1.2)} className="flex flex-row justify-center items-center">
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>ness</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt[-20px] -mt-[12px]"
      >
        <div className="w-full absolute hero-gradient rounded-tl-[140px] h-[300px] z-[0] -top-[30px]" />
        <img src="/cover.png" alt="cover" className="relative object-cover rounded-tl-[140px] w-full z-10 h-[350xp] sm:h-[500px]" />
        <a href="#explore">
          <div className="flex w-full justify-end relative -mt-[50px] sm:-mt-[70px] pr-[40px] z-10">
            <img src="/stamp.png" alt="stamp" className="object-contain w-[100px] sm:w-[155px] sm:h-[155px] h-[100]" />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
