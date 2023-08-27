import React from 'react'
import {about01, about02, about03,about04 } from "../assets/icons"; 

const About = () => {
  return (
    <section className='grid xl:grid-cols-4 md:grid-cols-2 gap-12'>
      <div className=''>
        <img src={about01} className='rounded-lg' alt='hamburger icon'/>
        <h2 className='pt-4 text-xl font-semibold'>Front-end Developer</h2>
        <p className='pt-4 text-gray-600'>I am a web front-end developer with 2 years of experience</p>
      </div>
      <div className=''>
        <img src={about02} className='rounded-lg' alt='hamburger icon'/>
        <h2 className='pt-4 text-xl font-semibold'>Back-end Developer</h2>
        <p className='pt-4 text-gray-600'>I am a web back-end developer with 2 years of experience</p>
      </div>
      <div className=''>
        <img src={about03} className='rounded-lg' alt='hamburger icon'/>
        <h2 className='pt-4 text-xl font-semibold'>Web Designer</h2>
        <p className='pt-4 text-gray-600'>I am a web Web Designer developer with 2 years of experience</p>
      </div>
      <div className=''>
        <img src={about04} className='rounded-lg' alt='hamburger icon'/>
        <h2 className='pt-4 text-xl font-semibold'>Website Tester</h2>
        <p className='pt-4 text-gray-600'>I am a web Website Tester developer with 2 years of experience</p>
      </div>
    </section>
  )
}

export default About