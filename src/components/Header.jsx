import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CgMenuOreos } from 'react-icons/cg';
import clsx from 'clsx';

export default function Header() {
  const [showMenu, setShowMenu] = useState("true");
  const location = useLocation();

  function handleMenu() {
    setShowMenu(prevMenu => !prevMenu);
    console.log("Menu: ", showMenu)
  }
  return (
    <header className='row-span-1 flex flex-row justify-between px-6 items-center shadow-md shadow-themeLightGrey'>
      <div className='flex flex-row justify-start items-center'>
        <Link to="/"><img src="/avatar.png" className='h-16 rounded-full mr-5' alt="" /></Link>
        <h1 className=''>welcome to my portfolio</h1>
      </div>
      <div className={clsx(
        "hidden sm:flex flex-row gap-4 md:gap-6 p-4",
        { 'block' : showMenu },
        { "hidden" : !showMenu})} onClick={handleMenu}>
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
        { 'hidden': showMenu },
        { 'block' : !showMenu})} size={25} onClick={handleMenu}/>
    </header>
  )
}
