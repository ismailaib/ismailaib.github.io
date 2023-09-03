import React, { useEffect , useState } from 'react';
import ScrollReveal from 'scrollreveal';
import { urlFor, client } from "../client";

const Skills = () => {

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.reveal', {
      duration: 1000,
      distance: '30px',
      easing: 'ease-in-out',
      origin: 'bottom',
      reset: false,
    });
  }, []);

  const [skills , setSkills] = useState([]);
  const [events , setEvents] = useState([]);

  useEffect(() => {
    client
      .fetch('*[_type == "skill"]')
      .then((data) => setSkills(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    client
      .fetch('*[_type == "event"]')
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


  return (
    <section className="py-16">
      <h1 className="text-3xl text-center font-semibold mb-8">Skills</h1>
      <div className="container mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 mt-20 max-md:gap-20">
        <div className="gap-10 flex flex-wrap items-start justify-center flex-1 reveal">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-28 h-28 rounded-full bg-[#f2e3e0] flex items-center justify-center">
                <img src={urlFor(skill.icon)} alt={skill.name} className="w-16" />
              </div>
              <p className="text-center text-gray-700 font-semibold mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
        <div className="container mx-auto">
          <div className="relative flex items-center">
            <div className="flex flex-col gap-5 justify-center w-1/2 reveal">
              {events.map((event, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-bold pb-5 text-[#FD481D] text-2xl">{event.name}</h3>
                  <p className="text-black pb-2 text-xl">{event.description}</p>
                  <span className="text-gray-400">{event.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;