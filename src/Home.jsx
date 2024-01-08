import { useEffect } from 'react'
import { SmoothScroll } from "./component/Functions/SmoothScroll";
import Navbar from './component/Navbar';
import Preloader from "./component/Preloader";
import Hero from "./component/Hero";
import ModelSection from './component/ModelSection';
import Contact from './component/Contact';

const Home = () => {

//---smooth scroll-----------------------//
  useEffect(() => {

    SmoothScroll()

  }, []);



    return (
        <main className="mx-2 md:mx-4 lg:mx-16">
            {/* <Preloader /> */}

            <Navbar />

            <Hero />

            <ModelSection />

            <Contact />
        </main>
    )
}

export default Home