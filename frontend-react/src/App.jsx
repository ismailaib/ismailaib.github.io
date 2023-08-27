import { Nav } from "./components";
import {
  Hero,
  Bar,
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
      <section className='w-full'>
        <Bar />
      </section>
      <section className='padding' id='About'>
        <About />
      </section>
      <section className='padding-x py-10'>
        <Skills />
      </section>
      <section className='padding'>
        <Projects />
      </section>
      <section className='bg-pale-blue padding'>
        <Contact />
      </section>
    </main>
  );
};

export default App;