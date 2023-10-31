'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-wrap gap-5 justify-between items-center">
        <h4 className=" md:text-[64px] text-[44px] text-white font-bold">Enter the Metaverse </h4>
        <button className="flex items-center h-fit py4 px-6 gap-[12px] rounded-[32px]" type="button">
          <img src="/headset.svg" alt="headset" className="w-[24px] h-[24px] object-contain" />
          <span className="text-[16px] text-white font-normal">
            ENTER METAVERSE
          </span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] opacity-10 h-[2px] bg-white " />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h4 className="font-extrabold text-white text-[24px]">Metaversus</h4>
        <p className="text-[14px] opacity-50 font-normal text-white">
          Copyright © 2021 - 2022 Metaversus. All rights reserved.
        </p>
        <div className="flex gap-4">
          {socials.map((social) => (
            <img
              key={social.name}
              src={social.url}
              alt={social.name}
              className="w-[24px] h-[24px] object-contain cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
