import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { CgLivePhoto } from 'react-icons/cg'

export default function ProjectCard({ name, imgUrl, desc, stack, demoUrl, githubUrl }) {
  return (
    <div className="gap-6 md:gap-10 lg:gap-20 flex flex-col lg:flex-row justify-center items-center">
      <img src={imgUrl} alt="" className='lg:w-[550px] lg:h-[350px] rounded-xl' />
      <div className='text-sm flex flex-col gap-6 lg:gap-8 md:gap-4'>
        <p><span className='text-themeHeadWhite font-bold'>Description: </span>{desc}</p>
        <p className='flex gap-1 flex-wrap'>
          <span className='text-themeHeadWhite font-bold'>Tech Stack: </span>
          {stack.map(item => <span className='border px-2'>{item}</span>)}
        </p>
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
      </div>
    </div>
  )
}
