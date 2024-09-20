import React from 'react';

export default function Hero() {
  return (
    <main className='row-span-10 w-full flex flex-col-reverse md:flex-row'>
      <div className='p-4 md:py-36 flex-1 md:px-24 flex flex-col items-center text-center'>
        <h1 className='mb-2'>Naijoe Srinivasan | Full-Stack Developer</h1>
        <p className=''>A versatile Full Stack Developer with a love for creating interactive, user-centric web 
        applications. Whether it's building sleek front-end interfaces or designing scalable back-end systems, I strive to craft 
        solutions that are both innovative and efficient. Explore my journey and the projects I've worked on!
        </p>
      </div>
      <div className='py-4 md:py-20 md:px-10 flex-1 h-1/2 md:h-full flex flex-row justify-center items-center'>
        <img src="/profile3.png" alt="" className='h-full rounded-xl md:rounded-3xl'/>
      </div>
    </main>
  )
}
