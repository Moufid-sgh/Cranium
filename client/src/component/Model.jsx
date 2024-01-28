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

  const firstImage = el.model_image[0]


  return (
    <div className="md:mr-7 lg:mr-16">
      <div className='relative w-[350px] h-[620px] sm:h-[720px] lg:h-[470px] my-10 active:scale-95 duration-300 ease'
        onClick={() => setModelOn(true)}>

        {el.sold_out && <div className="absolute top-0 right-[-20px] shadow-lg z-20 py-0.5 px-1 rotate-45 tracking-wide text-slate-200 bg-red-600">Sold out</div>}


        <div className='group h-full w-full relative overflow-hidden cursor-pointer active:cursor-grab'>
          <img src={firstImage} alt='skull' className='object-cover object-center w-full h-full absolute top-0 left-0 origin-left' />
          {el.sold_out && 
          <div className="glass z-20 p-4 absolute text-zinc-900 top-[35%] scale-x-0 group-hover:scale-100 ease-out duration-500">
            The model you were eyeing has found a fantastic new home! But don't worry, if you're interested, i can create a customized version just for you.
            </div>}
          <div className="glass w-full h-16 tracking-wide text-lg absolute bottom-0 flex items-center justify-center text-slate-200 translate-y-16 group-hover:translate-y-0 duration-500 ease-out">Discover</div>
        </div>

        <p className='text-[#e6eaf5] rockText text-center text-lg mt-2'>{el.model_name}</p>
      </div>

      <ModelDetails el={el} setModelOn={setModelOn} modelOn={modelOn} />
    </div>
  )
}

export default Model