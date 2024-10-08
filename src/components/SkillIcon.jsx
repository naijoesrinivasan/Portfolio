import { img } from 'framer-motion/client'
import React from 'react'

export default function SkillIcon({ skills }) {
  console.log("Skill icons: ", skills)
  return (
    <div className='flex gap-2'>
      {skills.map(skill => (
        <img
          src={skill.imgUrl}
          className={`h-[30px] md:h-[60px] ${skill.black ? "bg-themeHeadWhite rounded-full" : ""}`}
          alt={skill.name} />))}
    </div>
  )
}
