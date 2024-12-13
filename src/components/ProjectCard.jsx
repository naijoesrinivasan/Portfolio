import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa'
import { CgLivePhoto } from 'react-icons/cg'
import { motion } from 'framer-motion'
import {  descVariant } from '../utils/motionVariants'

export default function ProjectCard({ 
  name, 
  imgUrl, 
  desc, 
  stack, 
  demoUrl, 
  githubUrl 
}) {
  return (
    <div className="gap-6 bg-black hover:shadow-md hover:shadow-themeNeonGreen  flex flex-col p-4 md:p-6 lg:p-10 cursor-default">
      <h2>{name}</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="grow-1">
          <img 
            src={imgUrl} 
            alt="" 
            className='w-full' 
          />
        </div>
        <motion.div
          initial="hide"
          whileInView="show"
          className='flex-2 flex flex-col gap-6 lg:gap-8 md:gap-4 items-center'
        >
          <p>{desc}</p>
          <div className='flex gap-2 '>
            <a href={demoUrl} target='_blank'>
              <button className='demo-live-btn'>
                <CgLivePhoto />
                <span>Demo</span>
              </button>
            </a>
            <a href={githubUrl} target='_blank'>
              <button className='demo-live-btn'>
                <FaGithub />
                <span>Github</span>
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  name: PropTypes.string,
  imgUrl: PropTypes.string,
  desc: PropTypes.string,
  stack: PropTypes.arrayOf(PropTypes.string),
  demoUrl: PropTypes.string,
  githubUrl: PropTypes.string
}
