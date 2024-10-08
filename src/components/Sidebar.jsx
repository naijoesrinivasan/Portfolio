import React from 'react'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'

export default function Sidebar() {
  return (
    <section className='z-20 flex flex-col fixed top-0 right-0 h-screen w-[30%] rounded-lg overflow-auto bg-themeDarkGrey'>
      <HashLink>Home</HashLink>
      <HashLink>About</HashLink>
      <HashLink>Projects</HashLink>
      <HashLink>Contact</HashLink>
    </section>
  )
}
