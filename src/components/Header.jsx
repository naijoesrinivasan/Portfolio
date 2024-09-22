import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CgMenuOreos } from 'react-icons/cg';
import clsx from 'clsx';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

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
    <header className='row-span-1 flex flex-row justify-between px-6 items-center shadow-md shadow-themeLightGrey'>
      <div className='flex flex-row justify-start items-center'>
        <Link to="/"><img src="/avatar.png" className='h-16 rounded-full mr-5' alt="" /></Link>
        <h1 className=''>welcome to my portfolio</h1>
      </div>
      <div className={clsx(
        "hidden sm:flex flex-row gap-4 md:gap-6 p-4")} >
        <Link to="/" className={clsx(
          'hover:text-themeCrimRed hover:scale-105',
          { 'text-themeCrimRed scale-105' : location.pathname === '/'})}><p>Home</p></Link>
        <Link to="/about" className={clsx(
          'hover:text-themeCrimRed hover:scale-105',
          { 'text-themeCrimRed scale-105' : location.pathname === '/about'})}><p>About</p></Link>
        <Link to="/projects" className={clsx(
          'hover:text-themeCrimRed hover:scale-105',
          { 'text-themeCrimRed scale-105' : location.pathname === '/projects'})}><p>Projects</p></Link>
        <Link to="/contact" className={clsx(
          'hover:text-themeCrimRed hover:scale-105',
          { 'text-themeCrimRed scale-105' : location.pathname === '/contact'})}><p>Contact</p></Link>
      </div>
      <CgMenuOreos className={clsx(
        'block sm:hidden cursor-pointer',
        {'hidden' : showMenu})} size={25} onClick={handleMenu}/>
        {showMenu && (
          <div className={clsx("absolute top-0 right-0 flex flex-col h-[150px]  w-28 bg-[#262626] rounded-bl-lg overflow-hidden")} onClick={handleMenu}>
              <div className="hover:bg-themeCrimRed flex-1 flex items-center justify-center">
                <Link to='/'>
                  <p className='ml-2'>Home</p>
                </Link>
              </div>
              <div className="hover:bg-themeCrimRed flex-1 flex items-center justify-center">
                <Link to='/about'>
                  <p className='ml-2'>About</p>
                </Link>
              </div>
              <div className="hover:bg-themeCrimRed flex-1 flex items-center justify-center">
                <Link to='/projects'>
                  <p className='ml-2'>Projects</p>
                </Link>
              </div>
              <div className="hover:bg-themeCrimRed flex-1 flex items-center justify-center">
                <Link to='/contact'>
                  <p className='ml-2'>Contact</p>
                </Link>
              </div>
          </div>
        )}
      
    </header>
  )
}
