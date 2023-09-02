import ScrollReveal from 'scrollreveal';
import { about01, about02, arrowRight, eye, github } from '../assets/icons';
import React, { useEffect , useState } from 'react';
import { urlFor, client } from "../client";

const Projects = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.reveal', {
      duration: 1000,
      distance: '30px',
      easing: 'ease-in-out',
      origin: 'bottom',
      reset: true,
    });
  }, []);

  const [projects , setProjects] = useState([]);

    useEffect(() => {
    client
      .fetch('*[_type == "project"]')
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <section>
      <h1 className="flex justify-center text-3xl font-semibold">Projects</h1>
      <div className="grid xl:grid-cols-2 md:grid-cols-1 gap-12 mt-20">
        {projects.map((project, index) => (
          <div key={index} className='flex flex-row max-md:flex-col bg-white p-4 rounded-xl reveal'>
            <img src={urlFor(project.icon)} className="rounded-lg w-72 max-md:w-full" alt={`icon ${index + 1}`} />
            <div className='px-4'>
              <h2 className="pt-4 text-xl font-semibold">{project.title}</h2>
              <p className="pt-4 text-gray-600">{project.description}</p>
              <div className='mt-10 flex flex-row gap-5'>
                <a href={project.link}>
                  <img src={github} alt="" width={30} />
                </a>
                <a href={project.demo}>
                  <img src={eye} alt="" width={30} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid xl:grid-cols-2 md:grid-cols-1 gap-12 mt-20">
        <div className='flex flex-row max-md:flex-col bg-white p-4 rounded-xl reveal'>
          <img src={about01} className="rounded-lg w-72 max-md:w-full opacity-20" alt="" />
          <div className='opacity-20 px-4'>
            <h2 className="pt-4 text-xl font-semibold">Library</h2>
            <p className="pt-4 text-gray-600">Developing a comprehensive library web application and dashboard, along with a website, using the Laravel framework.</p>
            <div className='mt-10 flex flex-row gap-5 opacity-10'>
              <a href="#">
                <img src={github} alt="" width={30} />
              </a>
              <a href="#">
                <img src={eye} alt="" width={30} />
              </a>
            </div>
          </div>
        </div>
        <div className='flex flex-row max-md:flex-col bg-white p-4 rounded-xl linearGradient2 max-md:hidden reveal'>
          <img src={about02} className="rounded-lg w-72 max-md:w-full opacity-20" alt="" />
          <div className='opacity-20 px-4'>
            <h2 className="pt-4 text-xl font-semibold">Fullstack Portfolio</h2>
            <p className="pt-4 text-gray-600">Backend powered by Sanity, and frontend built with React. You can view the demo by following the link below.</p>
            <div className='mt-10 flex flex-row gap-5 opacity-10'>
              <a href="#">
                <img src={github} alt="" width={30} />
              </a>
              <a href="#">
                <img src={eye} alt="" width={30} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='flex align-middle items-center justify-center transform translate-y-[-100px] reveal'>
        <a href='https://github.com/ismailaib' className="flex items-center text-lg font-bold text-[#FD481D] hover:scale-110 gap-2 duration-300">
          See All Projects
          <svg width="20px" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-[-45deg]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Projects;