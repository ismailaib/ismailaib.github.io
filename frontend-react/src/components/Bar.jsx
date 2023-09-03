import Marquee from 'react-fast-marquee';
import { star } from "../assets/icons";
import React, { useEffect, useRef ,useState} from 'react';
import { urlFor, client } from "../client"

const Bar = () => {

  const [bars , setBars] = useState([]);

  useEffect(() => {
    // Fetch hero data from Sanity and update the state
    client
      .fetch('*[_type == "bar"]') // Assuming "hero" is the type name in your schema
      .then((data) => setBars(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <section className='bg-gradient-to-br linearGradient'>
            <div className='bg-[#262626] w-full  h-20 xl:transform xl:skew-y-[-0.5deg] flex flex-row items-center'>
            <Marquee>
              {bars.map((bar, index) => (
                <div key={index} className='flex gap-20'>
                  <div className='flex'>
                    <h2 className=' text-white text-2xl'>{bar.name}</h2>
                  </div>
                  <div>
                    <img src={urlFor(bar.icon)} className="" alt='arrow icon' width={30} />
                  </div>
                </div>
              ))}
            </Marquee>
            </div>
    </section>
  );
};

export default Bar;
