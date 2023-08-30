import {ProjectData} from '../constants';


const Projects = () => {
  return (
    <section className="">
      <h1 className="flex justify-center text-3xl font-semibold">Projects</h1>
      <div className="grid xl:grid-cols-2 md:grid-cols-1 gap-12 mt-20">
        {ProjectData.map((skill, index) => (
          <div key={index} className='flex flex-row max-md:flex-col bg-white p-4 rounded-xl'>
            <img src={skill.icon} className="rounded-lg w-72 max-md:w-full" alt={`icon ${index + 1}`} />
            <div className=' px-4'>
              <h2 className="pt-4 text-xl font-semibold">{skill.title}</h2>
              <p className="pt-4 text-gray-600">{skill.description}</p>
              <div className='mt-10 flex flex-row gap-5'>
                <a href={skill.link}> 
                  Github
                </a>
                <a href={skill.demo}>
                  Perview
                </a>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

  )
}

export default Projects