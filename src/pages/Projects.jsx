import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { CgLivePhoto } from 'react-icons/cg';

export default function Projects() {
  return (
    <section className='section-paddings flex flex-col gap-4 relative w-full' id='projects'>
      <h1 className='mt-10'>My Work</h1>
      <section className="flex flex-col gap-6 md:gap-10 lg:gap-20">
        <div className="gap-6 md:gap-10 lg:gap-20 flex flex-col lg:flex-row justify-center items-center">
          <img src="/jam-jam.png" alt="" className='lg:w-[550px] lg:h-[350px] rounded-xl' />
          <div className='text-sm flex flex-col gap-6 lg:gap-8 md:gap-4'>
            <p><span className='text-themeHeadWhite font-bold'>Description: </span>A full-featured Spotify clone built with React and Spotify API, allowing users to 
            browse, search, and play music while managing playlists. This project replicates core Spotify functionalities with real-time 
            data integration.</p>
            <p className='flex gap-1 flex-wrap'>
              <span className='text-themeHeadWhite font-bold'>Tech Stack: </span>
              <span className='border px-2'>React</span>
              <span className='border px-2'>Express</span>
              <span className='border px-2'>Tailwind</span>
              <span className='border px-2'>MongoDB</span>
            </p>
            <div className='flex gap-2 '>
              <a href="" target='_blank'>
                <button className='border border-themeNeonGreen rounded-md h-10 w-24 flex items-center gap-2 justify-center hover:bg-themeNeonGreen hover:bg-opacity-50'>
                  <CgLivePhoto />
                  <span>Demo</span>
                </button>
              </a>
              <a href="https://github.com/naijoesrinivasan/jam-jam" target='_blank'>
                <button className='border border-themeNeonGreen rounded-md h-10 w-24 flex items-center gap-2 justify-center hover:bg-themeNeonGreen hover:bg-opacity-50'>
                  <FaGithub />
                  <span>Github</span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="gap-6 md:gap-10 lg:gap-20 flex flex-col lg:flex-row justify-center items-center">
          <img src="/dashboard.png" alt="" className='lg:w-[550px] lg:h-[350px] rounded-xl' />
          <div className='text-sm flex flex-col gap-6 lg:gap-8 md:gap-4'>
            <p><span className='text-themeHeadWhite font-bold'>Description: </span>A responsive admin dashboard built with Next.js to visualize and manage data in 
            real-time. The dashboard includes user management, data visualization, and role-based access control, leveraging server-side 
            rendering (SSR) for optimal performance.</p>
            <p className='flex gap-1 flex-wrap'>
              <span className='text-themeHeadWhite font-bold'>Tech Stack: </span>
              <span className='border px-2'>Nex.js</span>
              <span className='border px-2'>React</span>
              <span className='border px-2'>Tailwind</span>
              <span className='border px-2'>PostgreSQL</span>
            </p>
            <div className='flex gap-2 '>
              <a href="https://next-dashboard-dusky-three.vercel.app/" target='_blank'>
                <button className='border border-themeNeonGreen rounded-md h-10 w-24 flex items-center gap-2 justify-center hover:bg-themeNeonGreen hover:bg-opacity-50'>
                  <CgLivePhoto />
                  <span>Demo</span>
                </button>
              </a>
              <a href="https://github.com/naijoesrinivasan/next-dashboard" target='_blank'>
                <button className='border border-themeNeonGreen rounded-md h-10 w-24 flex items-center gap-2 justify-center hover:bg-themeNeonGreen hover:bg-opacity-50'>
                  <FaGithub />
                  <span>Github</span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="gap-6 md:gap-10 lg:gap-20 flex flex-col lg:flex-row justify-center items-center">
          <img src="/notes.png" alt="" className='lg:w-[550px] lg:h-[350px] rounded-xl' />
          <div className="text-sm flex flex-col gap-6 lg:gap-8 md:gap-4">
            <p><span className='text-themeHeadWhite font-bold'>Description: </span>A note-taking application built with React and ReactMDE, allowing users to create, 
            edit, and format notes in Markdown. All notes are stored and synced using Firebase Firestore for real-time updates.</p>
            <p className='flex gap-1 flex-wrap'>
              <span className='text-themeHeadWhite font-bold'>Tech Stack: </span>
              <span className='border px-2'>React</span>
              <span className='border px-2'>CSS</span>
              <span className='border px-2'>Firebase</span>
            </p>
            <div className='flex gap-2 '>
              <a href="https://main--custom-notes123.netlify.app/" target='_blank'>
                <button className='border border-themeNeonGreen rounded-md h-10 w-24 flex items-center gap-2 justify-center hover:bg-themeNeonGreen hover:bg-opacity-50'>
                  <CgLivePhoto />
                  <span>Demo</span>
                </button>
              </a>
              <a href="https://github.com/naijoesrinivasan/notes-app" target='_blank'>
                <button className='border border-themeNeonGreen rounded-md h-10 w-24 flex items-center gap-2 justify-center hover:bg-themeNeonGreen hover:bg-opacity-50'>
                  <FaGithub />
                  <span>Github</span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className='gap-6 md:gap-10 lg:gap-20 flex flex-col lg:flex-row justify-center items-center'>
          <img src="/crestline.png" alt="" className='lg:w-[550px] lg:h-[350px] rounded-xl' />
          <div className="text-sm flex flex-col gap-6 lg:gap-8 md:gap-4">
            <p><span className='text-themeHeadWhite font-bold'>Description: </span>A camping van rental platform where users can browse and rent vans, and van owners can 
            host their listings. Built with React and Firebase for real-time data management and user authentication.</p>
            <p className='flex gap-1 flex-wrap'>
              <span className='text-themeHeadWhite font-bold'>Tech Stack: </span>
              <span className='border px-2'>React</span>
              <span className='border px-2'>CSS</span>
              <span className='border px-2'>Firebase</span>
            </p>
            <div className='flex gap-2 '>
              <a href="https://master--cozy-biscuit-cf55c3.netlify.app/" target='_blank'>
                <button className='border border-themeNeonGreen rounded-md h-10 w-24 flex items-center gap-2 justify-center hover:bg-themeNeonGreen hover:bg-opacity-50'>
                  <CgLivePhoto />
                  <span>Demo</span>
                </button>
              </a>
              <a href="https://github.com/naijoesrinivasan/vanlife" target='_blank'>
                <button className='border border-themeNeonGreen rounded-md h-10 w-24 flex items-center gap-2 justify-center hover:bg-themeNeonGreen hover:bg-opacity-50'>
                  <FaGithub />
                  <span>Github</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
