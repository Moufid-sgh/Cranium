import { useEffect } from "react";
import Preloader from "./component/Preloader";
import Lenis from '@studio-freight/lenis';
import Hero from "./component/Hero";
import ModelSection from "./component/ModelSection";



function App() {


  //---smooth scroll-----------------------//
  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
      ScrollTrigger.update()
    }
    requestAnimationFrame(raf)

  }, []);



  return (
    <main className="mx-4 md:mx-8 lg:mx-16">

      <Preloader />

      <nav className="flex items-center justify-between h-20">
        <h3 className="tracking-wider text-xl font-bold">Cranium</h3>
        <ul className="flex justify-around border md:w-[35%] lg:w-[22%]  tracking-wide">
          <li className="cursor-pointer border border-[#090909] py-0.5 px-4 rounded-3xl">Model</li>
          <li className="cursor-pointer border border-[#090909] py-0.5 px-4 rounded-3xl">Contact</li>
        </ul>
      </nav>

    <Hero />

    <div id="box1" className="flex items-center justify-center">
      <ModelSection />
    </div>
    


    </main>
  )
}

export default App
