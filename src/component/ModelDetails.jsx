import { createPortal } from 'react-dom';
import { useEffect, useRef, useState, Suspense } from 'react';
import { gsap } from 'gsap';
import { Loader } from './Functions/Loader';
import ErrorBoundary from './ErrorBoundary';



function ModelDetails({ el, setModelOn, modelOn }) {

  const imgList = el.imgList;

  //----Modal appear-------------------------------------//
  const modalRef = useRef();
  const firstSection = useRef();
  const secondSection = useRef();


  useEffect(() => {

    const tl  = gsap.timeline({defaults: { ease: 'power3.out' } })

    if (modelOn) {
      tl.to(modalRef.current, { x: "0%", duration: 0.8, ease: 'power4.easeInOut' })
      tl.from(secondSection.current, { opacity: 0, y: 200, duration: 0.8, ease: 'power4.easeInOut' })
      tl.fromTo(firstSection.current, { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', duration: 0.8, ease: 'power4.easeInOut' })
      tl.from('.text-reveal .modelTitle', { duration: 0.8, y: '200%', opacity: 0, ease: 'power1.out' })
    }
    else {
      tl.to(modalRef.current, { x: "-100%", duration: 0.7, ease: 'power4.easeInOut'})
    }
    
    return () => tl.kill()

  },[modelOn])


  //---handle slide------------------------------------//
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(imgList.length - 1)
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === imgList.length - 1) setCurrent(0);
    else setCurrent(current + 1)
  };



  return createPortal(

    <div ref={modalRef} 
         className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[#090909] translate-x-[-100%] z-50'>

      <div className='relative flex flex-col lg:flex-row items-center justify-center w-full h-full overflow-y-scroll lg:overflow-hidden'>
        <span onClick={() => setModelOn(false)}
          className='absolute top-4 right-5 z-20 font-weight text-2xl text-slate-100 hover:text-sky-600 duration-300 cursor-pointer'>&#10007;</span>


        <div ref={secondSection} className='flex flex-col items-center justify-center lg:w-1/2 mt-96 md:mt-0'>
          <div className='md:w-[640px] w-[320px] overflow-hidden'>
            <div className='flex transition ease-out duration-500' style={{ transform: `translateX(-${current * 100}%)` }}>
              {imgList.map((el, i) => {
                return <div key={i} className='relative w-[320px] md:w-[640px] h-[420px] md:h-[530px] shrink-0'>
                  <ErrorBoundary fallback={<p className="flex items-center justify-center text-slate-200 h-[400px]">⚠️ unexpected error</p>}>
                    <Suspense fallback={Loader()}>
                      <img src={el} alt='image' className='object-cover object-center w-full h-full absolute top-0 left-0' draggable="false" />
                    </Suspense>
                  </ErrorBoundary>
                </div>
              })}
            </div>
          </div>

          <div className='flex justify-center items-center mt-6'>
            <button className="text-slate-100 text-4xl mr-8 rotate-180 hover:text-sky-600 duration-300" onClick={previousSlide}>&#10153;</button>
            {imgList.map((el, i) => {
              return <div key={i} onClick={() => setCurrent(i)} className={`relative cursor-pointer w-16 h-16 mx-2 grayscale ${i === current && 'grayscale-0'}`}>
                <img src={el} alt='img' className='object-cover object-center w-full h-full absolute top-0 left-0' draggable="false" />
              </div>
            })}
            <button className="text-slate-100 text-4xl ml-8 hover:text-sky-600 duration-300" onClick={nextSlide}>&#10153;</button>
          </div>
        </div>



        <div className='lg:w-1/2 flex flex-col md:flex-row lg:flex-col items-center mt-2 md:mt-8 lg:mt-0'>

          <div className='text-reveal relative overflow-hidden'>
            <h1 className='modelTitle text-[80px] lg:text-[120px]'>CRANIUM</h1>
          </div>

          <div ref={firstSection} className='relative text-slate-100 w-64 h-64 mt-4 lg:mt-8 flex justify-center items-center'>
            <div>
              <h2 className='font-bold text-3xl'>Model name</h2>
              <ul className='mt-2 tracking-wider'>
                <li>Ox Head</li>
                <li>Engraving</li>
                <li>Painting</li>
              </ul>
            </div>

            <div className='absolute bottom-0 flex items-center w-60'>
              <span className='rotate-180'>&#10146;</span>
              <hr className='w-full' />
              <span className='absolute top-4 left-24 rockText'>80 cm</span>
              <span>&#10146;</span>
            </div>

            <div className='absolute bottom-1/2 right-1/2  flex items-center w-60 rotate-90'>
              <span className='rotate-180'>&#10146;</span>
              <hr className='w-full' />
              <span className='absolute top-4 left-24 rockText'>70 cm</span>
              <span>&#10146;</span>
            </div>
          </div>
        </div>

      </div>
    </div>,

    document.getElementById("portalModal")
  )
}

export default ModelDetails