import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import { CgMenuOreos } from 'react-icons/cg';
import { motion } from 'framer-motion';
import { navVariant, gradVariant } from '../utils/motionVariants';
import clsx from 'clsx';
import NavLink from './NavLink';

export default function Header() {
  const [showHamburger, setShowHamburger] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false)
  const location = useLocation();

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 640) {
        setShowHamburger(false);
        setShowSideBar(false);
      }
      else
        setShowHamburger(true)
      return null;
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  useEffect(() => {
    if (showSideBar) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    return () => {
      document.body.style.overflowY = 'auto'; // Cleanup on component unmount
    };
  }, [showSideBar]);

  function handleMenu() {
    setShowHamburger(!showHamburger);
    setShowSideBar(!showSideBar)
    document.body.style.overflowY = 'hidden';
  }

  return (
    <motion.header
      variants={navVariant}
      initial="hide"
      animate="show"
      className='m-2 md:mt-8 sticky rounded-full top-0 z-10 bg-black flex flex-row flex-wrap justify-between px-6 py-2 items-center' id='home'
    >
      <motion.div
        variants={gradVariant}
        initial="hide"
        animate="show"
        className='fixed top-0 left-0 z-1 nav-gradient w-full h-[50px] blur-[50px] sm:blur-[70px]'
      />
      <div>
        <HashLink to='/'>
          <div className='flex flex-row justify-start items-center cursor-pointer'>
            <h1 className='font-inter font-extrabold tracking-tighter z-30 hover:scale-[1.05] text-themeTextWhite'>NS</h1>
          </div>
        </HashLink>
      </div>
      <div className="">
        <div className={clsx("hidden sm:flex flex-row gap-4 md:gap-6 z-10")} >
          <NavLink name="About" location={location} setShowSideBar={setShowSideBar} />
          <NavLink name="Projects" location={location} setShowSideBar={setShowSideBar} />
          <NavLink name="Contact" location={location} setShowSideBar={setShowSideBar} />
        </div>
      </div>
      <CgMenuOreos className={clsx('block sm:hidden cursor-pointer z-40')} size={25} onClick={handleMenu} />
      {showSideBar &&
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "tween" }}
          className='fixed top-0 left-0 right-0 z-30 bg-themeDarkGrey w-full h-screen '
        >
          <div className={clsx("flex flex-col items-center justify-center h-full gap-4 md:gap-6 z-20")} >
            <NavLink name="About" location={location} setShowSideBar={setShowSideBar} />
            <NavLink name="Projects" location={location} setShowSideBar={setShowSideBar} />
            <NavLink name="Contact" location={location} setShowSideBar={setShowSideBar} />
          </div>
        </motion.div>
      }
      {/* {showSideBar && <SideBar location={location} />} */}
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