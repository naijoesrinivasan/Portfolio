import React from 'react';
import { motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';
import { slideFromLeft, slideFromRight, heroHover } from '../utils/motionVariants';
import TypingText from './TypingText';

export default function Hero() {
  const x = useMotionValue(0)
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#059669", "#ffffff", "#059669"]
  )
  return (
    <section className='z-10 relative section-paddings w-full flex flex-col-reverse justify-end gap-16 md:gap-24 md:flex-row md:h-screen' id='hero'>
      {/* <div className='absolute top-[200px] hero-gradient text-white z-20 border-2 border-green-500 w-full h-1/2 rotate-180 blur-[200px]' /> */}
      <motion.div
        variants={slideFromLeft}
        initial="hide"
        animate="show"
        className='z-30 gap-4 md:gap-8 flex flex-col justify-center  px-1'
      >
        <motion.div
          style={{ color: background }}
          transition={{ staggerChildren: 0.5 }}
          className='text-themeHeadWhite hover:text-emerald-600 text-pretty'
        >
          <TypingText text="NAIJOE SRINIVASAN" />
          <TypingText text="FULL STACK DEVELOPER" />
        </motion.div>
        <p>A versatile Full Stack Developer with a love for creating interactive, user-centric web 
          applications. Let's build some cool apps together!
        </p>
      </motion.div>
      <motion.div
        variants={slideFromRight}
        initial="hide"
        animate="show"
        className='z-30 shrink-0 flex flex-row justify-center items-center'
      >
        <motion.img
          variants={heroHover}
          whileHover="hover"
          drag="x"
          style={{ x }}
          dragConstraints={{ left: 0, right: 0 }}
          src="/naijoe-modified.jpg"
          alt="Profile Picture"
          className={`h-[300px] outline-dashed outline-offset-2 outline-emerald-600 sm:h-[400px] lg:h-[500px] aspect-square object-cover rounded-full`}
        />
      </motion.div>
    </section>
  )
}
