import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { CgLivePhoto } from 'react-icons/cg';
import { Rating } from '@mui/material';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';

export default function SkillCard({ name, imgUrl, level }) {
  return (
    <motion.img animate={{
      scale: [1, 1.1, 1.1, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeatDelay: 1
      }}
      layout
      src={imgUrl} alt="" className='h-[80px] md:h-[100px] aspect-square' />
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

  )
}
