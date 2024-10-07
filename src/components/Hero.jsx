import React from 'react';

export default function Hero() {
  return (
    <section className='z-10 relative section-paddings w-full flex flex-col-reverse justify-end gap-6 md:gap-10 md:flex-row md:h-screen' id='hero'>
      {/* <div className='absolute top-[200px] hero-gradient text-white z-20 border-2 border-green-500 w-full h-1/2 rotate-180 blur-[200px]' /> */}
      <div className='z-30 gap-2 md:gap-8 flex flex-col justify-center'>
        <h1 className=''>NAIJOE SRINIVASAN | FULL STACK DEVELOPER</h1>
        <p className=''>A versatile Full Stack Developer with a love for creating interactive, user-centric web 
        applications. Whether it's building sleek front-end interfaces or designing scalable back-end systems, I strive to craft 
        solutions that are both innovative and efficient. Explore my journey and the projects I've worked on!
        </p>
      </div>
      <div className='z-30 shrink-0 flex flex-row justify-center items-center'>
        <img src="/naijoe-modified.jpg" alt="" className='h-[300px] outline-dashed outline-offset-2 outline-emerald-600 sm:h-[440px] md:h-[500px] aspect-square object-cover rounded-full' />
      </div>
    </section>
  )
}
