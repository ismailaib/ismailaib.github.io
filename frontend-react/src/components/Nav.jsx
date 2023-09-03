import { useState } from "react";
import { navLinks } from "../constants";
import { hamburger, close } from "../assets/icons"; // Import the close icon

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="padding-x py-8 w-full z-50 px-16 bg-white bg-opacity-60 fixed backdrop-blur-lg">
      <nav className="flex justify-between items-center max-container image-animation">
        <a href="/" className="text-3xl font-bold">
          Ismail<span className="text-red-500">.aib</span>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-black"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="button flex align-middle justify-center max-lg:hidden">
          <a href="http://localhost:5173/#Contact">
            <button className="py-4 px-8 rounded-none border-2 hover:bg-black hover:text-white duration-300 border-black bg-transparent font-bold text-md">
              Let’s chat
            </button>
          </a>
        </div>
        <div className="lg:hidden">
          {isMobileMenuOpen ? (
            <div className="absolute lg:right-[-100%] transition-all h-[100vh] top-0 right-0 w-96 flex flex-col align-middle items-center justify-center bg-white bg-opacity-90 backdrop-blur-lg">
              <button
                className=" mt-10 mx-auto text-black font-bold"
                onClick={toggleMobileMenu}
              >
                <img src={close} alt="Close icon" width={25} height={25} />
              </button>
              <ul className="flex-1 flex flex-col justify-center items-center gap-10">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-montserrat leading-normal text-lg  text-black"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={hamburger}
              alt="hamburger icon"
              width={25}
              height={25}
              onClick={toggleMobileMenu}
              className="cursor-pointer transition duration-300 hover:opacity-70" // Add a transition effect and hover style
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
