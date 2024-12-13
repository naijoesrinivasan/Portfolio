import { motion, useMotionValue  } from 'framer-motion';
import { slideFromLeft, slideFromRight, heroHover } from '../utils/motionVariants';
import TypingText from './TypingText';

export default function Hero() {
  const x = useMotionValue(0)
  return (
    <section 
      className='z-5 relative section-paddings w-full flex flex-col-reverse justify-end gap-16 md:gap-24 md:flex-row md:h-screen' 
      id='hero'
    >
      <motion.div
        variants={slideFromLeft}
        initial="hide"
        animate="show"
        transition={{ staggerChildren: 0.8 }}
        className='z-5 gap-4 md:gap-8 flex flex-col justify-center px-1'
      >
        <motion.div
          className='text-themeHeadWhite hover:text-emerald-600 text-pretty z-5'
        >
          <TypingText text="NAIJOE SRINIVASAN" />
          <TypingText text="FULL STACK DEVELOPER" />
        </motion.div>
        <p>Building visually stunning, highly scalable and secure systems with a passion for seamless user experiences and optimized backend solutions.</p>
      </motion.div>
      <motion.div
        variants={slideFromRight}
        initial="hide"
        animate="show"
        className='z-5 shrink-0 flex flex-row justify-center items-center'
      >
        <motion.img
          variants={heroHover}
          whileHover="hover"
          drag="x"
          style={{ x }}
          dragConstraints={{ left: 0, right: 0 }}
          src="/naijoe-modified.jpg"
          alt="Profile Picture"
          className={`h-[300px] z-5 outline-dashed outline-offset-2 outline-emerald-600 sm:h-[400px] lg:h-[500px] aspect-square object-cover rounded-full`}
        />
      </motion.div>
    </section>
  )
}
