import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  const window = document.defaultView;
  const [iconSize, setIconSize] = useState(30);


  window.addEventListener("resize", (e) => {
    setIconSize(window.innerWidth <= 768 ? 20 : 30);
  })

  return (
    <footer className='flex flex-col w-full p-2 border border-themeNeonGreen border-opacity-10 rounded-full gap-1 md:gap-2'>
      <div className="flex flex-row flex-1 justify-center items-center gap-16 md:gap-32 lg:gap-40 text-themeNeonGreen ">
        <a href="https://github.com/naijoesrinivasan" target='_'><FaGithub size={iconSize}/></a>
        <a href="https://www.linkedin.com/in/naijoesrinivasan/" target='_'><FaLinkedinIn size={iconSize}/></a>
        <a href="mailto:naijoesrinivasan99@gmail.com"><MdEmail size={iconSize}/></a>
      </div>
      <p className='flex-1 text-center text-[12px] md:text-base'>&copy; 2024 Naijoe Srinivasan, All rights reserved.</p>
    </footer>
  )
}
