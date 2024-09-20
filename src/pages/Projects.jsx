import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { CgLivePhoto } from 'react-icons/cg';

export default function Projects() {
  return (
    <main className='row-span-10 flex flex-col gap-4 overflow-scroll relative p-6 md:p-10'>
      <h2 className='mt-4 sticky top-0'>My Work</h2>
      <section className="flex-1 p-4 flex flex-col gap-4 lg:grid grid-cols-2 grid-rows-2 lg:gap-6 lg:p-1 ">
        <div className="col-span-1 row-span-1 flex flex-col lg:flex-row justify-center items-center gap-4 p-4">
          <img src="/jam-jam.png" alt="" className='lg:max-w-[350px] rounded-2xl'/>
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
              <button className='border border-themeCrimRed rounded-md h-10 w-24 flex items-center gap-2 justify-center hover:bg-themeCrimRed'>
                <CgLivePhoto />
                <span>Demo</span>
              </button>
              <button className='border border-themeCrimRed rounded-md h-10 w-24 flex items-center gap-2 justify-center hover:bg-themeCrimRed'>
                <FaGithub />
                <span>Github</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1 flex flex-col lg:flex-row justify-center items-center gap-2 p-4">
          <img src="/dashboard.png" alt="" className='lg:max-w-[350px] rounded-2xl'/>
          <div className='text-sm flex flex-col gap-2 md:gap-4'>
            <p><span className='text-themeCrimRed font-bold'>Description: </span>A responsive admin dashboard built with Next.js to visualize and manage data in 
            real-time. The dashboard includes user management, data visualization, and role-based access control, leveraging server-side 
            rendering (SSR) for optimal performance.</p>
            <p className='flex gap-1 flex-wrap'>
              <span className='text-themeCrimRed font-bold'>Tech Stack: </span>
              <span className='border px-2'>Nex.js</span>
              <span className='border px-2'>React</span>
              <span className='border px-2'>Tailwind</span>
              <span className='border px-2'>PostgreSQL</span>
            </p>
            <div className='flex gap-2 '>
              <button className='border border-themeCrimRed rounded-md h-10 w-24 flex items-center gap-2 justify-center hover:bg-themeCrimRed'>
                <CgLivePhoto />
                <span>Demo</span>
              </button>
              <button className='border border-themeCrimRed rounded-md h-10 w-24 flex items-center gap-2 justify-center hover:bg-themeCrimRed'>
                <FaGithub />
                <span>Github</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1 flex flex-col lg:flex-row justify-center items-center gap-2 p-4">
          <img src="/notes.png" alt="" className='lg:max-w-[350px] rounded-2xl'/>
          <div className="text-sm flex flex-col gap-2 md:gap-4">
            <p><span className='text-themeCrimRed font-bold'>Description: </span>A note-taking application built with React and ReactMDE, allowing users to create, 
            edit, and format notes in Markdown. All notes are stored and synced using Firebase Firestore for real-time updates.</p>
            <p className='flex gap-1 flex-wrap'>
              <span className='text-themeCrimRed font-bold'>Tech Stack: </span>
              <span className='border px-2'>React</span>
              <span className='border px-2'>CSS</span>
              <span className='border px-2'>Firebase</span>
            </p>
            <div className='flex gap-2 '>
              <button className='border border-themeCrimRed rounded-md h-10 w-24 flex items-center gap-2 justify-center hover:bg-themeCrimRed'>
                <CgLivePhoto />
                <span>Demo</span>
              </button>
              <button className='border border-themeCrimRed rounded-md h-10 w-24 flex items-center gap-2 justify-center hover:bg-themeCrimRed'>
                <FaGithub />
                <span>Github</span>
              </button>
            </div>
          </div>
        </div>
        <div className='col-span-1 row-span-1 flex flex-col lg:flex-row justify-center items-center gap-2 p-4'>
          <img src="/crestline.png" alt="" className='lg:max-w-[350px] rounded-2xl'/>
          <div className="text-sm flex flex-col gap-2 md:gap-4">
            <p><span className='text-themeCrimRed font-bold'>Description: </span>A camping van rental platform where users can browse and rent vans, and van owners can 
            host their listings. Built with React and Firebase for real-time data management and user authentication.</p>
            <p className='flex gap-1 flex-wrap'>
              <span className='text-themeCrimRed font-bold'>Tech Stack: </span>
              <span className='border px-2'>React</span>
              <span className='border px-2'>CSS</span>
              <span className='border px-2'>Firebase</span>
            </p>
            <div className='flex gap-2 '>
              <button className='border border-themeCrimRed rounded-md h-10 w-24 flex items-center gap-2 justify-center hover:bg-themeCrimRed'>
                <CgLivePhoto />
                <span>Demo</span>
              </button>
              <button className='border border-themeCrimRed rounded-md h-10 w-24 flex items-center gap-2 justify-center hover:bg-themeCrimRed'>
                <FaGithub />
                <span>Github</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
