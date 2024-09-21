import React, { useState } from 'react';
import clsx from 'clsx';
import { Rating } from '@mui/material';
import { IoMdDownload } from 'react-icons/io';

export default function About() {
  const [stack, setStack] = useState("All");
  const [isTransitioning, setIsTransitioning] = useState(false);

  function handleStack(stack) {
    setIsTransitioning(true);
    setStack(stack);
    setTimeout(() => {
      
      setIsTransitioning(false);
    }, 300);
  }

  function openResume() {
    window.open('Naijoe Srinivasan.pdf')
  }

  return (
    <main className='row-span-10 p-10 gap-4 flex flex-col md:grid grid-cols-2 md:p-16 lg:p-20'>
      <div className='md:col-span-1'>
        <h1 className='mb-2'>About Me</h1>
        <p>I'm a versatile Software Developer, self-taught in modern technologies like React, Next.js, and Express. 
        With experience in full stack development, I’ve worked on everything from API integrations to optimizing ETL pipelines. 
        My projects prioritize SEO, accessibility, and responsive design, ensuring top-notch user experiences. From building web apps to 
        analyzing large datasets, I thrive on solving challenges across different domains. Lately, I've been diving into Three.js to add 
        more interactive 3D elements to my projects.</p>
        <button 
          className='mt-2 md:mt-6 border border-themeCrimRed px-4 py-2 flex items-center gap-1 rounded-md hover:bg-themeCrimRed'
          onClick={openResume}
        >
          <IoMdDownload className=''/> 
          <span className='text-md'>View My Reśumé</span>
        </button>
      </div>

      <div className='md:col-span-1 flex flex-col gap-6 z-20 overflow-scroll'>
        <div className='flex justify-center gap-4'>
          <button className={clsx(
            'border border-themeCrimRed rounded-md h-12 w-24',
            { 'bg-themeCrimRed ' : stack === 'All'})} onClick={() => handleStack("All")}>All</button>
          <button className={clsx(
            'border border-themeCrimRed rounded-md h-12 w-24',
            { 'bg-themeCrimRed ' : stack === 'Frontend'})} onClick={() => handleStack("Frontend")}>Frontend</button>
          <button className={clsx(
            'border border-themeCrimRed rounded-md h-12 w-24',
            { 'bg-themeCrimRed ' : stack === 'Backend'})} onClick={() => handleStack("Backend")}>Backend</button>
          <button className={clsx(
            'border border-themeCrimRed rounded-md h-12 w-24',
            { 'bg-themeCrimRed ' : stack === 'Database'})} onClick={() => handleStack("Database")}>Database</button>
        </div>
        <div className='flex flex-row flex-wrap justify-center items-center gap-10 overflow-scroll'>
          <div className={clsx(
            'flex flex-row items-center transition-opacity duration-300 gap-4',
            { 'hidden': stack !== 'Frontend' && stack !== 'All' },
            { 'opacity-0': isTransitioning},
            { 'opacity-100': !isTransitioning})}>
            <img src="react.png" alt="" className='h-20'/>
            <div className='flex flex-col'>
              <p>React</p>
              <Rating 
                name="read-only" 
                value={5} 
                readOnly 
                precision={0.5}
                sx={{'& .MuiRating-iconFilled': { color: '#DC143C' },
                      '& .MuiRating-iconEmpty': { color: '#DC143C' }}} 
                />
            </div>
          </div>
          <div className={clsx(
            'flex flex-row items-center transition-opacity duration-300 gap-4',
            { 'hidden': stack !== 'Frontend' && stack !== 'All'},
            { 'opacity-0': isTransitioning},
            { 'opacity-100': !isTransitioning})}>
            <img src="next.png" alt="" className='h-20 border rounded-full bg-themeLightGrey'/>
            <div className='flex flex-col'>
              <p>Next.js</p>
              <Rating 
                name="read-only" 
                value={4.5} 
                readOnly 
                precision={0.5}
                sx={{'& .MuiRating-iconFilled': { color: '#DC143C' },
                      '& .MuiRating-iconEmpty': { color: '#DC143C' }}} 
                />
            </div>
          </div>
          <div className={clsx(
            'flex flex-row items-center transition-opacity duration-300 gap-4',
            { 'hidden': stack == 'Database' },
            { 'opacity-0': isTransitioning},
            { 'opacity-100': !isTransitioning})}>
            <img src="javascript.png" alt="" className='h-20 '/>
            <div className='flex flex-col'>
              <p>Javascript</p>
              <Rating 
                name="read-only" 
                value={5} 
                readOnly 
                precision={0.5}
                sx={{'& .MuiRating-iconFilled': { color: '#DC143C' },
                      '& .MuiRating-iconEmpty': { color: '#DC143C' }}} 
                />
            </div>
          </div>
          <div className={clsx(
            'flex flex-row items-center transition-opacity duration-300 gap-4',
            { 'hidden': stack !== 'Frontend' && stack !== 'All' },
            { 'opacity-0': isTransitioning},
            { 'opacity-100': !isTransitioning})}>
            <img src="html5.png" alt="" className='h-20 '/>
            <div className='flex flex-col'>
              <p>HTML5</p>
              <Rating 
                name="read-only" 
                value={5} 
                readOnly 
                precision={0.5}
                sx={{'& .MuiRating-iconFilled': { color: '#DC143C' },
                      '& .MuiRating-iconEmpty': { color: '#DC143C' } }} 
                />
            </div>
          </div>
          <div className={clsx(
            'flex flex-row items-center transition-opacity duration-300 gap-4',
            { 'hidden': stack !== 'Frontend' && stack !== 'All' },
            { 'opacity-0': isTransitioning},
            { 'opacity-100': !isTransitioning})}>
            <img src="tailwind.png" alt="" className='h-20 '/>
            <div className='flex flex-col'>
              <p>Tailwind CSS</p>
              <Rating 
                name="read-only" 
                value={4.5} 
                readOnly 
                precision={0.5}
                sx={{'& .MuiRating-iconFilled': { color: '#DC143C' },
                      '& .MuiRating-iconEmpty': { color: '#DC143C' }}} 
                />
            </div>
          </div>
          <div className={clsx(
            'flex flex-row items-center transition-opacity duration-300 gap-4',
            { 'hidden': stack !== 'Backend' && stack !== 'All' },
            { 'opacity-0': isTransitioning},
            { 'opacity-100': !isTransitioning})}>
            <img src="node.png" alt="" className='h-20 '/>
            <div className='flex flex-col'>
              <p>Node.js</p>
              <Rating 
                name="read-only" 
                value={4.5} 
                readOnly 
                precision={0.5}
                sx={{'& .MuiRating-iconFilled': { color: '#DC143C' },
                      '& .MuiRating-iconEmpty': { color: '#DC143C' }}} 
                />
            </div>
          </div>
          <div className={clsx(
            'flex flex-row items-center transition-opacity duration-300 gap-4',
            { 'hidden': stack !== 'Backend' && stack !== 'All' },
            { 'opacity-0': isTransitioning},
            { 'opacity-100': !isTransitioning})}>
            <img src="express.png" alt="" className='h-20 border rounded-full bg-themeLightGrey'/>
            <div className='flex flex-col'>
              <p>Express</p>
              <Rating 
                name="read-only" 
                value={5} 
                readOnly 
                precision={0.5}
                sx={{'& .MuiRating-iconFilled': { color: '#DC143C' },
                      '& .MuiRating-iconEmpty': { color: '#DC143C' }}} 
                />
            </div>
          </div>
          <div className={clsx(
            'flex flex-row items-center transition-opacity duration-300 gap-4',
            { 'hidden': stack !== 'Database' && stack !== 'All' },
            { 'opacity-0': isTransitioning},
            { 'opacity-100': !isTransitioning})}>
            <img src="mongo.png" alt="" className='h-20 '/>
            <div className='flex flex-col'>
              <p>MongoDB</p>
              <Rating 
                name="read-only" 
                value={5} 
                readOnly 
                precision={0.5}
                sx={{'& .MuiRating-iconFilled': { color: '#DC143C' },
                      '& .MuiRating-iconEmpty': { color: '#DC143C' }}} 
                />
            </div>
          </div>
          <div className={clsx(
            'flex flex-row items-center transition-opacity duration-300 gap-4',
            { 'hidden': stack !== 'Database' && stack !== 'All' },
            { 'opacity-0': isTransitioning},
            { 'opacity-100': !isTransitioning})}>
            <img src="firebase.png" alt="" className='h-20 '/>
            <div className='flex flex-col'>
              <p>Firebase</p>
              <Rating 
                name="read-only" 
                value={4} 
                readOnly 
                precision={0.5}
                sx={{'& .MuiRating-iconFilled': { color: '#DC143C' },
                      '& .MuiRating-iconEmpty': { color: '#DC143C' }}} 
                />
            </div>
          </div>
          <div className={clsx(
            'flex flex-row items-center transition-opacity duration-300 gap-4',
            { 'hidden': stack !== 'Backend' && stack !== 'All' },
            { 'opacity-0': isTransitioning},
            { 'opacity-100': !isTransitioning})}>
            <img src="flask.png" alt="" className='h-20 border rounded-full bg-themeLightGrey'/>
            <div className='flex flex-col'>
              <p>Flask</p>
               <Rating 
                name="read-only" 
                value={4} 
                readOnly 
                precision={0.5}
                sx={{'& .MuiRating-iconFilled': { color: '#DC143C' },
                      '& .MuiRating-iconEmpty': { color: '#DC143C' }}} 
                />
            </div>
          </div>
          <div className={clsx(
            'flex flex-row items-center transition-opacity duration-300 gap-4',
            { 'hidden': stack !== 'Database' && stack !== 'All' },
            { 'opacity-0': isTransitioning},
            { 'opacity-100': !isTransitioning})}>
            <img src="mysql.png" alt="" className='h-20 '/>
            <div className='flex flex-col'>
              <p>MySQL</p>
              <Rating 
                name="read-only" 
                value={5} 
                readOnly 
                precision={0.5}
                sx={{'& .MuiRating-iconFilled': { color: '#DC143C' },
                      '& .MuiRating-iconEmpty': { color: '#DC143C' }}} 
                />
            </div>
          </div>
          <div className={clsx(
            'flex flex-row items-center transition-opacity duration-300 gap-4',
            { 'hidden': stack !== 'Database' && stack !== 'All' },
            { 'opacity-0': isTransitioning},
            { 'opacity-100': !isTransitioning})}>
            <img src="postgresql.png" alt="" className='h-20'/>
            <div className='flex flex-col'>
              <p>PostgreSQL</p>
              <Rating 
                name="read-only" 
                value={4.5} 
                readOnly 
                precision={0.5}
                sx={{'& .MuiRating-iconFilled': { color: '#DC143C' },
                      '& .MuiRating-iconEmpty': { color: '#DC143C' }}} 
                />
            </div>
          </div>
          <div className={clsx(
            'flex flex-row items-center transition-opacity duration-300 gap-4',
            { 'hidden': stack !== 'Backend' && stack !== 'All' },
            { 'opacity-0': isTransitioning},
            { 'opacity-100': !isTransitioning})}>
            <img src="python.png" alt="" className='h-20 '/>
            <div className='flex flex-col'>
              <p>Python</p>
              <Rating 
                name="read-only" 
                value={4} 
                readOnly 
                precision={0.5}
                sx={{'& .MuiRating-iconFilled': { color: '#DC143C' },
                      '& .MuiRating-iconEmpty': { color: '#DC143C' }}} 
                />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
