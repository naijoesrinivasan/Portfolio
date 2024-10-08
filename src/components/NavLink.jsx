import React from 'react'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'
import clsx from 'clsx'

export default function NavLink({ location, name }) {
  return (
    <HashLink
      to={name === 'Home' ? '#hero' : `#${name.toLowerCase()}`}
      className={clsx(
        'hover:text-themeNeonGreen hover:scale-105',
        { 'text-themeNeonGreen scale-105': location.hash === `#${name.toLowerCase()}` })}
    >
      <p>{name}</p>
    </HashLink>
  )
}
