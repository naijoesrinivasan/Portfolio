import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact'


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
