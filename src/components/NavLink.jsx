import React from 'react'
import { Link } from 'react-scroll';
import clsx from 'clsx'

export default function NavLink({ location, name, setShowSideBar }) {
  const targetHash = name === 'Home' ? 'hero' : `${name.toLowerCase()}`
  return (
    <Link
      to={targetHash}
      smooth={true}
      duration={200}
      className={clsx(
        'text-themeNeonGreen sm:text-themeTextWhite hover:text-themeNeonGreen hover:scale-105 cursor-pointer z-10',
        { 'text-themeNeonGreen scale-105': location.hash === `#${name.toLowerCase()}` })}
      onClick={() => setShowSideBar(false)}
    >
      <p className='lg:text-[18px]'>{name}</p>
    </Link>
  )
}
