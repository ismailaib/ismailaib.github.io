import { arrowRight , linkedin , whatsapp , github} from "../assets/icons";
import React, { useEffect, useRef ,useState} from 'react';
import CountUp from 'react-countup';
import anime from 'animejs';
import { urlFor, client } from "../client";

const Hero = () => {
  
  const [targetNumber, setTargetNumber] = useState(53);
  const [targetNumber2, setTargetNumber2] = useState(89);
  const buttonsRef = useRef(null);
  const socialIconsRef = useRef(null);
  
  useEffect(() => {
    const buttons = buttonsRef.current;
    const socialIcons = socialIconsRef.current;
  
    anime({
      targets: buttons,
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000,
      delay:1000,
      easing: 'easeOutExpo',
    });
  
    anime({
      targets: socialIcons,
      translateX: [-50, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: 500,
      easing: 'easeOutExpo',
    });
  }, []);

  const [heros , setHeros] = useState([]);

  useEffect(() => {
    // Fetch hero data from Sanity and update the state
    client
      .fetch('*[_type == "hero"]') // Assuming "hero" is the type name in your schema
      .then((data) => setHeros(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
   <section id="Home" className="w-full grid xl:grid-cols-2	justify-center min-h-fit py-8 gap-10 max-container pb-0">
      
      <div
        className="relative pl-8 w-11/12 flex flex-col justify-center items-start max-xl:padding-x pt-28" 
      >
        {heros.map((hero, index) => (
          <div key={index}>
            <h1 className="text-[4rem] flex flex-row items-center gap-12 mt-10 font-palanquin max-sm:text-[40px] max-sm:leading-[60px] font-bold">
              {hero.greeting}
              <span className="button5 text-xl max-2xl:text-sm transform scale-125 bg-indigo-700 flex align-middle h-fit text-white p-2 border rounded-full hover:scale-110 duration-300 cursor-pointer max-md:text-sm max-sm:hidden">
                {hero.domaine}
              </span>
            </h1>
            <h1 className="max-2xl:text-[3rem] text-[4rem] flex flex-row gap-3 font-palanquin max-sm:text-[40px] max-sm:leading-[60px] font-bold">
              {hero.name}
            </h1>
            <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
              {hero.description}
            </p>
          </div>
        ))}


        <div className="flex gap-9 items-center">
          <a href="https://github.com/ismailaib">
            <button className="py-4 px-8 rounded-none bg-[#FD481D] text-white font-bold text-md hover:bg-transparent border-2 border-[#FD481D] duration-300 hover:text-[#FD481D]">Hire me</button>
          </a>
          <a href="https://github.com/ismailaib?tab=repositories">
            <button className="flex items-center text-lg font-bold text-[#FD481D] hover:scale-110 duration-300">
              Projects
              <img src={arrowRight} className="rotate-[-45deg]" alt='arrow icon' width={45} />
            </button>
          </a>
        </div>
        <div className="grid py-10 xl:grid-cols-2	justify-start gap-10">
          <h2 className="text-3xl font-bold">
          + <b><CountUp end={targetNumber} duration={2.5} /></b>
            <span className="text-xl font-normal"> Clients</span>
          </h2>
          <h2 className="text-3xl font-bold">
          + <b><CountUp end={targetNumber2} duration={3} /></b>
            <span className="text-xl font-normal"> Project done </span>
          </h2>
        </div>
        <div className="flex flex-col justify-between align-middle gap-5" ref={socialIconsRef}>
        {heros.map((hero, index) => (

          <div key={index} className="flex flex-row gap-5">
            <a href={hero.github} className=" cursor-pointer">
              <img src={github} className="" alt='arrow icon' width={30} />
            </a>
            <a href={hero.linkedin} className=" cursor-pointer">
              <img src={linkedin} className="" alt='arrow icon' width={34} />
            </a>
            <a href={hero.whatsapp} className=" cursor-pointer">
              <img src={whatsapp} className="" alt='arrow icon' width={30} />
            </a>
          </div>
        ))}

        </div>
      </div>
      <div className="relative w-11/12 flex flex-col items-start max-xl:padding-x pt-28">
        {heros.map((hero, index) => (
          <div key={index} className="flex flex-col align-middle shape justify-end w-full h-full rounded-lg max-md:p-0">
            <img ref={buttonsRef} src={urlFor(hero.image)} className=" w-full pt-10 px-10 max-md:p-0" alt='arrow icon' width={65} />
          </div>
        ))}
          {heros.map((hero, index) => (
            <div key={index} className="hidden sm:block">
              <div ref={socialIconsRef} className="w-[100px] h-[100px] flex items-center justify-center rounded-full border-2 border-[#00d8ff] absolute left-16 bottom-[62%] max-lg:left-24 animate-float01">
                <img src={urlFor(hero.icon2)} className="w-62" alt='arrow icon' width={65} />
              </div>
              <div ref={socialIconsRef} className="w-[120px] h-[120px] flex items-center justify-center rounded-full border-2 border-[#FD481D] absolute left-[70%] bottom-[48%] animate-float02">
                <img src={urlFor(hero.icon3)} className="w-65" alt='arrow icon' width={70} />
              </div>
              <div ref={socialIconsRef} className="w-[80px] h-[80px] flex items-center justify-center rounded-full border-2 border-yellow-400 absolute left-[70%] bottom-[75%] animate-float03">
                <img src={urlFor(hero.icon1)} className="w-62" alt='arrow icon' width={65} />
              </div>
            </div>
          ))}
      </div>
   </section>
        
  );
};

export default Hero;


