import { useEffect, useState } from "react";
import ModelDetails from "./ModelDetails";




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

        <div className='group h-full w-full relative overflow-hidden cursor-pointer active:cursor-grab'>
          <img src={el.img} alt='skull' className='object-cover object-center w-full h-full absolute top-0 left-0 origin-left' />
          <div className="glass w-full h-16 tracking-wide text-lg absolute bottom-0 flex items-center justify-center text-slate-200 translate-y-16 group-hover:translate-y-0 duration-500 ease-out">Discover</div>
        </div>

        <p className='text-[#e6eaf5] rockText text-lg mt-2'>Ox head</p>
      </div>

      <ModelDetails el={el} setModelOn={setModelOn} modelOn={modelOn} />
    </>
  )
}

export default Model