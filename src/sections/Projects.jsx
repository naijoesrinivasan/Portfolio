import ProjectCard from '../components/ProjectCard';
import { projects } from '../utils/data';

export default function Projects() {
  return (
    <section className='min-h-screen section-paddings flex flex-col justify-center items-center gap-4 md:gap-10 lg:gap-24 relative w-full' id='projects'>
      <h1 className='mt-10 md:mt-20 lg:mt-32'>My Work</h1>
      <section className="flex flex-col gap-6 md:gap-10 lg:gap-20">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            name={project.name}
            imgUrl={project.imgUrl}
            desc={project.desc}
            stack={project.stack}
            demoUrl={project.demoUrl}
            githubUrl={project.githubUrl}
          />))}
      </section>
    </section>
  )
}
