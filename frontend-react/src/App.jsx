import React, { useState, useEffect } from "react";
import { Nav, Bar } from "./components";
import { Hero, About, Skills, Projects, Contact } from "./sections";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <main className="relative">
      {loading ? (
        <div className=" flex items-center justify-center h-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <Nav />
          <section className="xl:padding-l wide:padding-r ml-8 min-h-[100vh]">
            <Hero />
          </section>
          <section className="w-full ">
            <Bar />
          </section>
          <section className="padding bg-pale-blue min-h-[100vh]" id="About">
            <About />
          </section>
          <section className="padding-x py-10 min-h-[100vh]" id="Skills">
            <Skills />
          </section>
          <section className="padding bg-pale-blue min-h-[100vh]" id="Works">
            <Projects />
          </section>
          <section className=" padding min-h-[100vh]" id="Contact">
            <Contact />
          </section>
        </>
      )}
    </main>
  );
};

export default App;
