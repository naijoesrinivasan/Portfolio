import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { CgLivePhoto } from 'react-icons/cg';

export default function Card({ imgUrl, description, }) {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
      <img src="/jam-jam.png" alt="" className='lg:max-w-[350px] rounded-xl' />
      <div className='text-sm flex flex-col gap-2 md:gap-4'>
        <p><span className='text-themeCrimRed font-bold'>Description: </span>A full-featured Spotify clone built with React and Spotify API, allowing users to
          browse, search, and play music while managing playlists. This project replicates core Spotify functionalities with real-time
          data integration.</p>
        <p className='flex gap-1 flex-wrap'>
          <span className='text-themeCrimRed font-bold'>Tech Stack: </span>
          <span className='border px-2'>React</span>
          <span className='border px-2'>Express</span>
          <span className='border px-2'>Tailwind</span>
          <span className='border px-2'>MongoDB</span>
        </p>
        <div className='flex gap-2 '>
          <a href="" target='_blank'>
            <button className='border border-themeCrimRed rounded-md h-10 w-24 flex items-center gap-2 justify-center hover:bg-themeCrimRed'>
              <CgLivePhoto />
              <span>Demo</span>
            </button>
          </a>
          <a href="https://github.com/naijoesrinivasan/jam-jam" target='_blank'>
            <button className='border border-themeCrimRed rounded-md h-10 w-24 flex items-center gap-2 justify-center hover:bg-themeCrimRed'>
              <FaGithub />
              <span>Github</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
