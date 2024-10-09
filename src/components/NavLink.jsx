import React from 'react'
// import { HashLink } from 'react-router-dom'
import { Link } from 'react-scroll';
import clsx from 'clsx'

export default function NavLink({ location, name }) {
  const targetHash = name === 'Home' ? 'hero' : `${name.toLowerCase()}`
  return (
    <Link
      to={targetHash}
      smooth={true}
      duration={300}
      className={clsx(
        'hover:text-themeNeonGreen hover:scale-105 cursor-pointer',
        { 'text-themeNeonGreen scale-105': location.hash === `#${name.toLowerCase()}` })}
    >
      <p className='lg:text-[18px]'>{name}</p>
    </Link>
  )
}
