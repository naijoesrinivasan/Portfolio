import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import { CgMenuOreos } from 'react-icons/cg';
import clsx from 'clsx';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  console.log("Header location: ", location)

  useEffect(() => {

    function handleResize() {
      if(window.innerWidth > 640)
        setShowMenu(false);
      return null;
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header className='mt-2 md:mt-8 sticky border border-opacity-10 border-themeSpringGreen rounded-full top-0 z-50 backdrop-blur-xl flex flex-row justify-between px-6 py-2 items-center' id='home'>
      {/* <div className="absolute w-full border blur-[1px] border-themeLightGrey bottom-0" /> */}
      <div className='absolute top-0 z-1 nav-gradient text-white border-2 border-green-500 w-full h-[50px]' />
      <div className='flex flex-row justify-start items-center'>
        <h2 className='font-bold text-[color:#f5f5f5]'>NS</h2>
      </div>
      <div className={clsx("hidden sm:flex flex-row gap-4 md:gap-6 z-10")} >
        <HashLink
          to="#hero" className={clsx(
            'hover:text-themeNeonGreen hover:scale-105',
            { 'text-themeNeonGreen scale-105': location.hash === '#hero' })}
        >
          <p>Home</p>
        </HashLink>
        <HashLink to="#about" className={clsx(
          'hover:text-themeNeonGreen hover:scale-105',
          { 'text-themeNeonGreen scale-105': location.hash === '#about' })}
        >
          <p>About</p>
        </HashLink>
        <HashLink to="#projects" className={clsx(
          'hover:text-themeNeonGreen hover:scale-105',
          { 'text-themeNeonGreen scale-105': location.hash === '#projects' })}
        >
          <p>Projects</p>
        </HashLink>
        <HashLink to="#contact" className={clsx(
          'hover:text-themeNeonGreen hover:scale-105',
          { 'text-themeNeonGreen scale-105': location.hash === '#contact' })}
        >
          <p>Contact</p>
        </HashLink>
      </div>
      <CgMenuOreos className={clsx(
        'block sm:hidden cursor-pointer',
        {'hidden' : showMenu})} size={25} onClick={handleMenu}/>
        {showMenu && (
          <div className={clsx("absolute top-0 right-0 flex flex-col h-[150px]  w-28 bg-[#262626] rounded-bl-lg overflow-hidden")} onClick={handleMenu}>
          <div className="hover:bg-themeNeonGreen flex-1 flex items-center justify-center">
            <HashLink to='#hero'>
                  <p className='ml-2'>Home</p>
            </HashLink>
              </div>
          <div className="hover:bg-themeNeonGreen flex-1 flex items-center justify-center">
            <HashLink to='#about'>
                  <p className='ml-2'>About</p>
            </HashLink>
              </div>
          <div className="hover:bg-themeNeonGreen flex-1 flex items-center justify-center">
            <HashLink to='#projects'>
                  <p className='ml-2'>Projects</p>
            </HashLink>
              </div>
          <div className="hover:bg-themeNeonGreen flex-1 flex items-center justify-center">
            <HashLink to='#contact'>
                  <p className='ml-2'>Contact</p>
            </HashLink>
              </div>
          </div>
        )}
      
    </header>
  )
}
