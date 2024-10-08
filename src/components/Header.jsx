import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import { CgMenuOreos } from 'react-icons/cg';
import { easeIn, motion } from 'framer-motion';
import { navVariant, gradVariant } from '../utils/motionVariants';
import clsx from 'clsx';
import NavLink from './NavLink';
import Sidebar from './Sidebar';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {

    function handleResize() {
      if(window.innerWidth > 640)
        setShowMenu(false);
      else
        setShowMenu(true)
      return null;
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <motion.header
      variants={navVariant}
      initial="hide"
      animate="show"
      className='m-2 md:mt-8 sticky rounded-full top-0 z-20  bg-black flex flex-row justify-between px-6 py-2 items-center ' id='home'
    >
      <motion.div
        variants={gradVariant}
        initial="hide"
        animate="show"
        className='fixed top-0 left-0 z-1 nav-gradient w-full h-[50px] blur-[60px] sm:blur-[80px]'
      />
      <HashLink to='/'>
        <div className='flex flex-row justify-start items-center cursor-pointer'>
          <h2 className='font-inter font-extrabold tracking-tighter z-10 hover:scale-[1.05] text-themeTextWhite'>NS</h2>
        </div>
      </HashLink>
      <div className={clsx("hidden sm:flex flex-row gap-4 md:gap-6 z-10")} >
        <NavLink name="About" location={location} />
        <NavLink name="Projects" location={location} />
        <NavLink name="Contact" location={location} />
      </div>
      <CgMenuOreos className={clsx('block sm:hidden cursor-pointer z-10')} size={25} onClick={handleMenu} />
    </motion.header>
  )
}

{/* {showMenu && (
        <div className={clsx("z-50 absolute top-0 right-0 flex flex-col h-[150px]  w-28 bg-[#262626] rounded-bl-lg overflow-hidden")} onClick={handleMenu}>
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
      )} */}