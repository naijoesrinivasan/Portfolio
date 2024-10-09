import { img } from 'framer-motion/client'
import React from 'react'

export default function SkillIcon({ skills }) {
  console.log("Skill icons: ", skills)
  return (
    <div className='flex gap-2 md:gap-4 lg:gap-6'>
      {skills.map(skill => (
        <div className='flex flex-col gap-1'>
          <img
            src={skill.imgUrl}
            className={`h-[30px] md:h-[60px] aspect-square object-contain ${skill.black ? "bg-themeHeadWhite rounded-full" : ""}`}
            alt={skill.name}
          />
          <span className='text-sm'>{skill.name}</span>
        </div>
      ))}
    </div>
  )
}
