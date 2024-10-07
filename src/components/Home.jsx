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
  const location = useLocation();
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  useEffect(() => {
    function findNext() {
      switch (location.pathname) {
        case '/': return '/about';
        case '/about': return '/projects';
        case '/projects': return '/contact';
        case '/contact': return '/';
      }
    }

    function findPrev() {
      switch (location.pathname) {
        case '/': return '/contact';
        case '/about': return '/';
        case '/projects': return '/about';
        case '/contact': return '/projects';
      }
    }

    setNextPage(findNext());
    setPrevPage(findPrev());

  }, [location])


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
