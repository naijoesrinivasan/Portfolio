import React, { useState } from 'react';
import clsx from 'clsx';
import { Rating } from '@mui/material';
import { IoMdDownload } from 'react-icons/io';
import SkillCard from '../components/SkillCard';
import { motion } from 'framer-motion';
import { skills } from '../utils/data';

export default function About() {
  console.log(skills)
  function openResume() {
    window.open('Naijoe Srinivasan_FullStack Developer.pdf')
  }

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className='z-10 relative section-paddings w-full flex flex-col justify-center items-center gap-16 md:gap-24 ' id='about'>
      <div className='z-30 gap-4 md:gap-8 flex flex-col justify-center'>
        <h1>About Me</h1>
        <p>I'm a versatile Software Developer, self-taught in modern technologies like React, Next.js, and Express. 
        With experience in full stack development, I’ve worked on everything from API integrations to optimizing ETL pipelines. 
        My projects prioritize SEO, accessibility, and responsive design, ensuring top-notch user experiences. From building web apps to 
        analyzing large datasets, I thrive on solving challenges across different domains. Lately, I've been diving into Three.js to add 
        more interactive 3D elements to my projects.</p>
        <button 
          className='border border-themeNeonGreen px-4 py-2 h-10 w-[180px] flex items-center gap-1 rounded-md hover:bg-themeNeonGreen hover:bg-opacity-50'
          onClick={openResume}
        >
          <IoMdDownload /> 
          <span className='text-md'>View My Reśumé</span>
        </button>
      </div>
      <div className='flex flex-col w-full lg:grid grid-cols-2 gap-4 flex-wrap'>
        {skills.map((skillCategory, i) => {
          const [category, skills] = Object.entries(skillCategory)[0]
          return <SkillCard category={category} skills={skills} />
        })}
      </div>
      {/* </div> */}
    </motion.section>
  )
}
