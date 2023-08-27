import { arrowRight , facebook , instagram , twitter , profile , react , node , python} from "../assets/icons";

const Hero = () => {

  return (
   <section id="Home" className="w-full grid xl:grid-cols-2	justify-center min-h-fit py-8 gap-10 max-container">
      <div
        className="relative pl-8 w-11/12 flex flex-col justify-center items-start max-xl:padding-x pt-28" 
      >
        <h1 className="text-[4rem] flex flex-row items-center gap-12 mt-10 font-palanquin max-sm:text-[40px] max-sm:leading-[60px] font-bold">
            Hi! I Am
            <span className="text-[1.5rem] bg-indigo-700 flex align-middle h-fit text-white p-2 border rounded-full hover:scale-110 duration-300 cursor-pointer">Full stack Developer</span>
            <br />
        </h1>
        <h1 className="text-[4rem] flex flex-row gap-3 font-palanquin max-sm:text-[40px] max-sm:leading-[60px] font-bold">Ismail Aitbouhmad</h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Building website for over 2 years 
          as a full-stack developer
        </p>
        <div className="flex gap-9">
          <button className="py-4 px-8 rounded-none bg-[#FD481D] text-white font-bold text-md hover:bg-transparent border-2 border-[#FD481D] duration-300 hover:text-[#FD481D]">Hire me</button>
          <button className="flex items-center text-lg font-bold text-[#FD481D] hover:scale-110 duration-300">
            Projects
            <img src={arrowRight} className="rotate-[-45deg]" alt='arrow icon' width={45} />
          </button>
        </div>
        <div className="grid py-10 xl:grid-cols-2	justify-start gap-10">
          <h2 className="text-3xl font-bold">
            + 84
            <span className="text-xl font-normal"> Clients</span>
          </h2>
          <h2 className="text-3xl font-bold">
            + 578
            <span className="text-xl font-normal"> Project done </span>
          </h2>
        </div>
        <div className="flex flex-col justify-between align-middle gap-5">
          <h2 className="text-3xl font-bold">Contact</h2>
          <div className="flex flex-row gap-5">
            <a href="/" className=" cursor-pointer">
              <img src={facebook} className="" alt='arrow icon' width={30} />
              Facebook
            </a>
            <a href="/" className=" cursor-pointer">
              <img src={instagram} className="" alt='arrow icon' width={30} />
              Instagram
            </a>
            <a href="/" className=" cursor-pointer">
              <img src={twitter} className="" alt='arrow icon' width={30} />
              Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="relative w-11/12 flex flex-col items-start max-xl:padding-x pt-28">
        <div className="flex flex-col align-middle  justify-end bg-gray-300 w-full h-full rounded-lg">
        <div className="hidden md:block">
          <div className="w-[80px] h-[80px] flex items-center justify-center rounded-full bg-white absolute left-16 bottom-[62%] max-lg:left-24">
            <img src={react} className=" w-62" alt='arrow icon' width={65} />
          </div>
          <div className="w-[80px] h-[80px] flex items-center justify-center rounded-full bg-white absolute left-[70%] bottom-[48%]">
            <img src={node} className=" w-62" alt='arrow icon' width={65} />
          </div>
          <div className="w-[80px] h-[80px] flex items-center justify-center rounded-full bg-white absolute left-[70%] bottom-[75%]">
            <img src={python} className=" w-62" alt='arrow icon' width={65} />
          </div>
        </div>
          <img src={profile} className=" w-full pt-10 px-10" alt='arrow icon' width={65} />
        </div>
      </div>
   </section>
        
  );
};

export default Hero;
