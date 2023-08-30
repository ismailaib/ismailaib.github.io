import React from 'react';
import Marquee from 'react-fast-marquee';
import { star } from "../assets/icons";


const Bar = () => {
  return (
    <section className='bg-gradient-to-br from-blue-100 to-white'>
            <div className='bg-[#262626] w-full  h-20 transform skew-y-1 flex flex-row items-center justify-between'>
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
        
    </section>
  );
};

export default Bar;
