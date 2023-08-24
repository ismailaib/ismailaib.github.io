import { Nav } from "./components";
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
      <h1>nav</h1>
      <section className='xl:padding-l wide:padding-r padding-b'>
        {/* <Hero /> */}
        <h1>Hero</h1>
      </section>
      <section className='padding'>
        {/* <About /> */}
        <h1>About</h1>
      </section>
      <section className='padding-x py-10'>
        {/* <Skills /> */}
        <h1>Skills</h1>
      </section>
      <section className='padding'>
        {/* <Projects /> */}
        <h1>Projects</h1>
      </section>
      <section className='bg-pale-blue padding'>
        {/* <Contact /> */}
        <h1>Contact</h1>
      </section>
    </main>
  );
};

export default App;