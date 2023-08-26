import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";


const Nav = () => {
  return (
    <header className='padding-x py-8 w-full z-50 px-16 bg-white bg-opacity-60 fixed backdrop-blur-lg'>
      <nav className='flex justify-between items-center max-container image-animation'>
        <a href='/' className="text-3xl font-bold">
          Ismail<span className="text-red-500">.aib</span>
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-black'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='button  flex align-middle justify-center max-lg:hidden'>
          <button className="py-4 px-8 rounded-none border-2	border-black bg-transparent font-bold text-md">Let’s chat</button>
        </div>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;