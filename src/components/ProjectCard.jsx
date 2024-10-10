import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { CgLivePhoto } from 'react-icons/cg'
import { motion, useScroll } from 'framer-motion'
import { projectCardVariant, descVariant } from '../utils/motionVariants'

export default function ProjectCard({ name, imgUrl, desc, stack, demoUrl, githubUrl }) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      variants={projectCardVariant}
      initial="tilt"
      whileHover="untilt"
      className="gap-6 bg-transparent backdrop-filter flex flex-col items-center w-fit p-4 md:p-6 lg:p-10 outline-dashed outline-themeNeonGreen rounded-md">
      <img src={imgUrl} alt="" className='rounded-xl object-contain' />
      <motion.div
        variants={descVariant}
        initial="hide"
        whileInView="show"
        className='flex flex-col gap-6 lg:gap-8 md:gap-4 items-center'
      >
        <p>{desc}</p>
        {/* <p className='flex gap-1 flex-wrap'>
          <span className='text-themeHeadWhite font-semibold'>Tech Stack: </span>
          {stack.map(item => <span className='border px-2'>{item}</span>)}
        </p> */}
        <div className='flex gap-2 '>
          <a href={demoUrl} target='_blank'>
            <button className='border border-themeNeonGreen rounded-md h-10 w-24 flex items-center gap-2 justify-center hover:bg-themeNeonGreen hover:bg-opacity-50'>
              <CgLivePhoto />
              <span>Demo</span>
            </button>
          </a>
          <a href={githubUrl} target='_blank'>
            <button className='border border-themeNeonGreen rounded-md h-10 w-24 flex items-center gap-2 justify-center hover:bg-themeNeonGreen hover:bg-opacity-50'>
              <FaGithub />
              <span>Github</span>
            </button>
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}
