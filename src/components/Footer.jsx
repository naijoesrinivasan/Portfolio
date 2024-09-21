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
    <footer className='row-span-1 flex flex-col w-full shadow-2xl shadow-themeLightGrey p-2'>
      <div className="flex flex-row flex-1 justify-center items-center gap-10 text-themeCrimRed ">
        <a href="https://github.com/naijoesrinivasan" target='_'><FaGithub size={iconSize}/></a>
        <a href="https://www.linkedin.com/in/naijoesrinivasan/" target='_'><FaLinkedinIn size={iconSize}/></a>
        <a href="mailto:naijoesrinivasan99@gmail.com"><MdEmail size={iconSize}/></a>
      </div>
      <p className='flex-1 text-center'>&copy; 2024 Naijoe Srinivasan, All rights reserved.</p>
    </footer>
  )
}
