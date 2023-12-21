import React from 'react';
import { useEffect } from "react";
import Preloader from "./component/Preloader";
import Hero from "./component/Hero";
import { SmoothScroll } from "./component/Functions/SmoothScroll";
import Navbar from './component/Navbar';
import Test from "./component/Test";
import ModelSection from './component/ModelSection';


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

      <ModelSection />

    </main>
  )
}

export default App
