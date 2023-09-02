import React, { useEffect , useState } from 'react';
import ScrollReveal from 'scrollreveal';
import { urlFor, client } from "../client";

  


const About = () => {

  const [abouts , setAbouts] = useState([]);

  useEffect(() => {
    client
      .fetch('*[_type == "about"]')
      .then((data) => setAbouts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.reveal', {
      duration: 1000,
      distance: '30px',
      easing: 'ease-in-out',
      origin: 'bottom',
      reset: true,
      delay: 200,
    });
  }, []);

  return (
    <section className="">
      <h1 className="flex justify-center text-3xl font-semibold">About me</h1>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-12 mt-20 reveal">
        {abouts.map((about, index) => (
          <div key={index} className='bg-white p-4 rounded-xl' data-sal="slide-up">
            <img src={urlFor(about.image)} className="rounded-lg" alt={`icon ${index + 1}`} />
            <h2 className="pt-4 text-xl font-semibold">{about.title}</h2>
            <p className="pt-4 text-gray-600">{about.description}</p>
            <div className="pt-4">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#FD481D] bg-red-200">
                      Skill Level
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-[#FD481D]">
                      {about.skill}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200">
                  <div
                    style={{ width: `${about.skill}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#FD481D]"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;