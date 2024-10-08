import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { CgLivePhoto } from 'react-icons/cg';
import { Rating } from '@mui/material';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';
import SkillIcon from './SkillIcon';

export default function SkillCard({ category, skills }) {
  console.log("Category: ", category)
  console.log("Skill: ", skills)
  return (
    <div className="flex flex-col gap-2 px-4 py-2 rounded-xl outline-dashed outline-inset-2 outline-emerald-600">
      <p>{category}</p>
      <SkillIcon skills={skills} />
    </div>
  )
}
// <img src={imgUrl} alt="" className='h-[80px] md:h-[100px] aspect-square' />
    // {/* <div className='flex flex-col'>
    //   <p>{name}</p>
    //   <Rating
    //     name="read-only"
    //     value={rating}
    //     readOnly
    //     precision={0.5}
    //     sx={{
    //       '& .MuiRating-iconFilled': { color: '#059669' },
    //       '& .MuiRating-iconEmpty': { color: '#059669' }
    //     }}
    //   />
// </div> */}