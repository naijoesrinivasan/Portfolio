import React, {useEffect, useState} from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function HomeLayout() {
  const location = useLocation();
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  useEffect(() => {
    function findNext() {
      switch(location.pathname) {
        case '/': return '/about';
        case '/about': return '/projects';
        case '/projects': return '/contact';
        case '/contact': return '/';
      }
    }

    function findPrev() {
      switch(location.pathname) {
        case '/': return '/contact';
        case '/about': return '/';
        case '/projects': return '/about';
        case '/contact': return '/projects';
      }    
    }

    setNextPage(findNext());
    setPrevPage(findPrev());

  }, [location])


  console.log(location.pathname)
  return (
    <div className='h-full grid grid-rows-12 relative'>
       <Header />
       <Outlet />
       <Footer /> 
       <Link to={prevPage}>
        <span className='absolute bottom-[80px] md:top-1/2 hover:cursor-pointer ml-2 hover:text-themeCrimRed'>
          <GrFormPrevious size={30}/>
        </span>
       </Link>
       <Link to={nextPage}>
        <span className='absolute bottom-[80px] md:top-1/2 right-0 hover:cursor-pointer mr-2 hover:text-themeCrimRed'>
          <GrFormNext size={30}/>
        </span>
       </Link>
    </div>
  )
}
