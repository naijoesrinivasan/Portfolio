import React from 'react'
import NavLink from './NavLink'

export default function SideBar({ location }) {
  return (
    <section className='fixed top-0 right-0 h-screen flex flex-col w-[70%] rounded-lg overflow-auto bg-themeDarkGrey'>
      <NavLink location={location} name="About">About</NavLink>
      <NavLink location={location} name="Projects">Projects</NavLink>
      <NavLink location={location} name="Contact">Contact</NavLink>
    </section>
  )
}
