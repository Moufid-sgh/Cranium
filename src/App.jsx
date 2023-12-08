import React from 'react';
import { useEffect } from "react";
import Preloader from "./component/Preloader";
import Hero from "./component/Hero";
import ModelSection from "./component/ModelSection";
import { SmoothScroll } from "./component/Functions/SmoothScroll";
import Navbar from './component/Navbar';



function App() {


  //---smooth scroll-----------------------//
  useEffect(() => {

    SmoothScroll()

  }, []);




  return (
    <main className="mx-2 md:mx-8 lg:mx-16">

      {/* <Preloader /> */}

      <Navbar />

      <Hero />

      <div id="box1" className="flex items-center justify-center">
        <ModelSection />
      </div>

    </main>
  )
}

export default App
