import React from 'react';
import { skillsData , eventData } from "../constants";

const Skills = () => {
  return (
    <section className="py-16">
      <h1 className="text-3xl text-center font-semibold mb-8">Skills</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 mt-20">
        <div className="gap-10 flex flex-wrap items-start justify-center flex-1">
          {skillsData.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-28 h-28 rounded-full bg-[#f2e3e0] flex items-center justify-center">
                <img src={skill.icon} alt={skill.title} className="w-16" />
              </div>
              <p className="text-center text-gray-700 font-semibold mt-2">{skill.title}</p>
            </div>
          ))}
        </div>
        <div className="container mx-auto">
          <div className="relative flex items-center">
            <div className="flex flex-col gap-5 justify-center items-center w-1/2">
              {eventData.map((event, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-bold pb-5 text-[#FD481D] text-2xl">{event.title}</h3>
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
