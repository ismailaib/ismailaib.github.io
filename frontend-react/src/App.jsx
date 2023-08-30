import { Nav , Bar} from "./components";
import {
  Hero,
  About,
  Skills,
  Projects,
  Contact,
} from "./sections";



const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b ml-8'>
        <Hero />
      </section>
      <section className='w-full '>
        <Bar />
      </section>
      <section className='padding bg-pale-blue' id='About'>
        <About />
      </section>
      <section className='padding-x py-10 ' id="Skills">
        <Skills />
      </section>
      <section className='padding bg-pale-blue' id="Works">
        <Projects />
      </section>
      <section className=' padding' id="Contact">
        <Contact />
      </section>
    </main>
  );
};

export default App;