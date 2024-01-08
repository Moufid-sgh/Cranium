import { useEffect, useState, useRef } from "react";
import ModelDetails from "./ModelDetails";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function Model({ el }) {


  const [modelOn, setModelOn] = useState(false);

  //------handle scroll modal--------------------------------------------//
  useEffect(() => {
    if (modelOn) {
      document.body.classList.add('modelOn')
    }
    else {
      document.body.classList.remove('modelOn')
    }
  }, [modelOn]);




  return (
    <>
      <div className='w-[350px] h-[620px] sm:h-[720px] lg:h-[470px] my-10 active:scale-95 duration-300 ease'
        onClick={() => setModelOn(true)}>

        <div className="glass opacity-0 fixed top-5 left-[-40px] z-10 w-24 h-24 rounded-full flex items-center justify-center text-base text-slate-200 tracking-wider">
          Discover
        </div>

        <div className='model h-full w-full relative overflow-hidden cursor-pointer active:cursor-grab'>
          <img src={el.img} alt='skull' className='object-cover object-center w-full h-full absolute top-0 left-0 origin-left' />
        </div>

        <p className='text-[#e6eaf5] rockText text-lg mt-2'>Ox head</p>
      </div>

      {modelOn && <ModelDetails el={el} setModelOn={setModelOn} />}
    </>
  )
}

export default Model