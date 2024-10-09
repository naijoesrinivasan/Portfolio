import React from 'react'
import { motion } from 'framer-motion'
import { glitchVariants } from '../utils/motionVariants'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <motion.section variants={glitchVariants}
      animate="visible" className="flex flex-col justify-center items-center h-screen section-paddings">
      <div className="flex flex-col justify-center items-center gap-6">
        <motion.p
          variants={glitchVariants}
          animate="visible"
          className='text-[28px] md:text-[32px] lg:text-[44px] leading-8 h-fit flex flex-col items-center justify-center text-center text-themeHeadWhite'
        >
          Sorry! Looks like something went wrong.
        </motion.p>
        <p className='text-sm md:text-base lg:text-[28px]'>Back to where things still work</p>
        <Link to='/'>
          <p className='text-sm md:text-base lg:text-[28px] outline-dashed outline-offset-2 outline-emerald-600 p-2 rounded-lg'>
            <span>&rarr;</span> Naijoe's Portfolio
          </p>
        </Link>
      </div>
    </motion.section>
  )
}
