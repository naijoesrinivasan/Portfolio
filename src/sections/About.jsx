import { IoMdDownload } from 'react-icons/io';
import SkillCard from '../components/SkillCard';
import { motion } from 'framer-motion';
import { skills } from '../utils/data';

export default function About() {
  function openResume() {
    window.open('Naijoe Srinivasan_FullStack Developer.pdf')
  }

  return (
    <section className='z-5 relative section-paddings w-full flex flex-col justify-center items-center gap-16 md:gap-24 ' id='about'>
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5, type: "spring", stiffness: 50, damping: 10 }}
        className='z-5 gap-4 md:gap-8 flex flex-col justify-center'
      >
        <h1>About Me</h1>
        <p>I’m a full-stack developer who loves building fast, SEO-friendly apps with tools like Next.js, React, Angular, and Tailwind CSS. On the backend, I work comfortably with Node.js, Express, and various SQL and NoSQL databases like PostgreSQL, MongoDB, and Firebase.

From building a Spotify clone and Threads app clone to creating a 3D solar system with Three.js, I enjoy tackling projects that blend performance with creativity. I’ve also dipped into machine learning through an internship at NUS and worked with ETL pipelines for insurance data. With a wide range of tools in my belt, I’m excited to take on new challenges in full-stack and software engineering roles.</p>
        <button 
          className='border border-themeNeonGreen px-4 py-2 h-10 w-[180px] flex items-center gap-1 rounded-md hover:bg-themeNeonGreen hover:bg-opacity-50'
          onClick={openResume}
        >
          <IoMdDownload /> 
          <span className='text-md'>View My Reśumé</span>
        </button>
      </motion.div>
      <motion.div
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5, type: "spring", stiffness: 50, damping: 10 }}
        className='flex flex-col w-full lg:grid grid-cols-2 gap-4 flex-wrap'>
        {skills.map((skillCategory, i) => {
          const [category, skills] = Object.entries(skillCategory)[0]
          return <SkillCard category={category} skills={skills} key={i} />
        })}
      </motion.div>
      {/* </div> */}
    </section>
  )
}
