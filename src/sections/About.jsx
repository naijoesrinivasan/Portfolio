import React, { useState } from 'react';
import clsx from 'clsx';
import { Rating } from '@mui/material';
import { IoMdDownload } from 'react-icons/io';
import SkillCard from '../components/SkillCard';
import { motion } from 'framer-motion';
import { skills } from '../utils/data';

export default function About() {
  function openResume() {
    window.open('Naijoe Srinivasan_Full Stack Developer.pdf')
  }

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className='z-10 relative section-paddings w-full flex flex-col md:flex-row items-center gap-16 md:gap-24 md:h-screen' id='about'>
      <div
        className='z-30 lg:w-[660px] gap-4 md:gap-8 flex flex-col justify-center'>
        <h1 className='text-themeHeadWhite '>About Me</h1>
        <p className='text-themeTextWhite '>I'm a versatile Software Developer, self-taught in modern technologies like React, Next.js, and Express. 
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
      <div className='grid grid-cols-4 shrink-0 grid-rows-4 w-fit hover:gap-2 self-center'>
        {skills.map(skill => (
          <SkillCard
            name={skill.name}
            imgUrl={skill.imgUrl}
            level={skill.level}
          />))}
      </div>
      {/* </div> */}
    </motion.section>
  )
}
