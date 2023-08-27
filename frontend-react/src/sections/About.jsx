import React from 'react'
import {about01, about02, about03,about04} from "../assets/icons"; 

const About = () => {
  return (
    <section className=''>
      <h1 className='flex justify-center text-3xl pb-10 font-semibold'>About me</h1>
      <div className='grid xl:grid-cols-4 md:grid-cols-2 gap-12'>
        <div className=''>
          <img src={about01} className='rounded-lg' alt='hamburger icon' />
          <h2 className='pt-4 text-xl font-semibold'>Front-end Developer</h2>
          <p className='pt-4 text-gray-600'>I am a web front-end developer with 2 years of experience</p>
          <div className='pt-4'>
            <div className='relative pt-1'>
              <div className='flex mb-2 items-center justify-between'>
                <div>
                  <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#FD481D] bg-red-200'>
                    Skill Level
                  </span>
                </div>
                <div className='text-right'>
                  <span className='text-xs font-semibold inline-block text-[#FD481D]'>
                    90%
                  </span>
                </div>
              </div>
              <div className='overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200'>
                <div style={{ width: '90%' }} className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#FD481D]'></div>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <img src={about02} className='rounded-lg' alt='hamburger icon'/>
          <h2 className='pt-4 text-xl font-semibold'>Back-end Developer</h2>
          <p className='pt-4 text-gray-600'>I am a web back-end developer with 2 years of experience</p>
          <div className='pt-4'>
            <div className='relative pt-1'>
              <div className='flex mb-2 items-center justify-between'>
                <div>
                  <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#FD481D] bg-red-200'>
                    Skill Level
                  </span>
                </div>
                <div className='text-right'>
                  <span className='text-xs font-semibold inline-block text-[#FD481D]'>
                    60%
                  </span>
                </div>
              </div>
              <div className='overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200'>
                <div style={{ width: '60%' }} className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#FD481D]'></div>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <img src={about03} className='rounded-lg' alt='hamburger icon'/>
          <h2 className='pt-4 text-xl font-semibold'>Web Designer</h2>
          <p className='pt-4 text-gray-600'>I am a web Web Designer developer with 2 years of experience</p>
          <div className='pt-4'>
            <div className='relative pt-1'>
              <div className='flex mb-2 items-center justify-between'>
                <div>
                  <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#FD481D] bg-red-200'>
                    Skill Level
                  </span>
                </div>
                <div className='text-right'>
                  <span className='text-xs font-semibold inline-block text-[#FD481D]'>
                    40%
                  </span>
                </div>
              </div>
              <div className='overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200'>
                <div style={{ width: '40%' }} className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#FD481D]'></div>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <img src={about04} className='rounded-lg' alt='hamburger icon'/>
          <h2 className='pt-4 text-xl font-semibold'>Website Tester</h2>
          <p className='pt-4 text-gray-600'>I am a web Website Tester developer with 2 years of experience</p>
          <div className='pt-4'>
            <div className='relative pt-1'>
              <div className='flex mb-2 items-center justify-between'>
                <div>
                  <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#FD481D] bg-red-200'>
                    Skill Level
                  </span>
                </div>
                <div className='text-right'>
                  <span className='text-xs font-semibold inline-block text-[#FD481D]'>
                    40%
                  </span>
                </div>
              </div>
              <div className='overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200'>
                <div style={{ width: '40%' }} className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#FD481D]'></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About