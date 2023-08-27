import React from 'react';
import Marquee from 'react-fast-marquee';
import { star } from "../assets/icons";


const Bar = () => {
  return (
    <section>
      <div className='bg-gradient-to-r from-[#89F2DF] to-[#FFF100] w-full h-32 flex justify-center items-center overflow-hidden'>
            <div className='bg-[#262626] w-full h-20 rotate-[-0.8deg] flex flex-row items-center justify-between'>
            <Marquee>
                <h2 className=' text-white text-2xl'>Front-end Developer</h2>
                <img src={star} className="" alt='arrow icon' width={30} />
                <h2 className=' text-white text-2xl'>Back-end Developer</h2>
                <img src={star} className="" alt='arrow icon' width={30} />
                <h2 className=' text-white text-2xl'>Web Designer</h2>
                <img src={star} className="" alt='arrow icon' width={30} />
                <h2 className=' text-white text-2xl'>Website Tester</h2>
                <img src={star} className="" alt='arrow icon' width={30} />
                </Marquee>

            </div>
        
      </div>
    </section>
  );
};

export default Bar;
