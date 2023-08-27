import React from 'react';
import { arrowRight , facebook , instagram , twitter , profile , react , node , python , laravel} from "../assets/icons";


const Skills = () => {
  return (
    <section className="py-16">
      <h1 className="text-3xl text-center font-semibold mb-8">Skills</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="grid grid-cols-3 mr-52">
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-full bg-[#f2e3e0] flex items-center justify-center">
              <img src={python} alt="HTML" className="w-16" />
            </div>
            <p className="text-center font-semibold mt-2">PYTHON</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-full bg-[#f2e3e0] flex items-center justify-center">
              <img src={laravel} alt="CSS" className=" w-16" />
            </div>
            <p className="text-center font-semibold mt-2">LARAVEL</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-full bg-[#f2e3e0] flex items-center justify-center">
              <img src={react} alt="JavaScript" className="w-16" />
            </div>
            <p className="text-center font-semibold mt-2">REACT</p>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold">Front-end Developer</h2>
            <p className="text-gray-600">Company XYZ - 2020 to Present</p>
            <p className="mt-2">Worked on building responsive and user-friendly web applications using modern front-end technologies.</p>
          </div>

          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold">Full Stack Developer</h2>
            <p className="text-gray-600">Tech Solutions Inc. - 2018 to 2020</p>
            <p className="mt-2">Developed and maintained web applications from front-end to back-end, including database management.</p>
          </div>

          {/* Add more experiences here */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
