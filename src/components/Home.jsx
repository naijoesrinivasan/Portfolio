import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact'


export default function HomeLayout() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
