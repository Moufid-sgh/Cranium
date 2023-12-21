import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

import ox0 from "/ox/ox-0.jpg"
import ox1 from "/ox/ox-1.jpg"
import ox2 from "/ox/ox-2.jpg"
import ox3 from "/ox/ox-3.jpg"
import ox4 from "/ox/ox-4.jpg"
import ox5 from "/ox/ox-5.jpg"
import ox7 from "/ox/ox-7.jpg"


function ModelDetails({ setModelOn, index }) {

  const oxHead = [{ name: "oxHead", img: ox0 }, { name: "oxHead", img: ox1 }, { name: "oxHead", img: ox2 }, { name: "oxHead", img: ox3 },
  { name: "oxHead", img: ox4 }, { name: "oxHead", img: ox5 }, { name: "oxHead", img: ox7 }]

  const list = [ox0, ox1, ox2, ox3]


  const selectedModel = oxHead.filter((el, i) => i === index)

  //----Modal appear-------------------------------------//
  const modalRef = useRef();
  const firstSection = useRef();
  const secondSection = useRef();

  useEffect(() => {
    let tl = gsap.timeline()
    
    let ctx = gsap.context(() => {
      tl.fromTo(modalRef.current, 
        {scaleX: 0},{scaleX: 1, transformOrigin:'left', duration: 0.8, ease: 'power4.easeInOut'}
      )
      tl.from(secondSection.current, 
        {opacity: 0, y: 200, duration: 0.5, ease: 'power4.easeInOut'}
      )
      tl.fromTo(firstSection.current, 
        {scaleX: 0},{scaleX: 1, transformOrigin:'left', duration: 0.6, ease: 'power4.easeInOut'}
      )
      tl.from('.text-reveal .title', {duration: 1, y: '200%',opacity: 0,ease: 'power1.out'}
      )
    });

    return () => ctx.revert()
  }, [])

  //---handle slide------------------------------------//
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(list.length - 1)
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === list.length - 1) setCurrent(0);
    else setCurrent(current + 1)
  };



  return (
    <div ref={modalRef} className='fixed top-0 left-0 h-screen w-full bg-[#090909] z-50 flex items-center justify-center'>
      <span onClick={() => setModelOn(false)} className='absolute top-4 right-5 font-weight text-2xl text-slate-100 hover:text-sky-600 duration-300 cursor-pointer'>&#10007;</span>

      <div className='w-1/2 h-full flex flex-col items-center'>
        
        <div className='text-reveal relative overflow-hidden'>
          <h1 className='title modelTitle text-[120px] font-extrabold '>CRANIUM</h1>
        </div>

        <div ref={firstSection} className='relative text-slate-100 w-64 h-64 mt-8 flex justify-center items-center'>
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


      <div ref={secondSection} className='flex flex-col items-center w-1/2'>
        <div className='w-[470px] overflow-hidden relative'>
          <div className='flex transition ease-out duration-500' style={{ transform: `translateX(-${current * 100}%)` }}>
            {list.map((el, i) => {
              return <div key={i} className='relative w-[470px] h-[450px] shrink-0'>
                <img src={el} alt='image' className='object-cover object-center w-full h-full absolute top-0 left-0' draggable="false" />
              </div>
            })}
          </div>
        </div>

        <div className='flex justify-center items-center   mt-6 '>
          <button className="text-slate-100 text-4xl mr-8 rotate-180 hover:text-sky-600 duration-300" onClick={previousSlide}>&#10153;</button>
          {list.map((el, i) => {
            return <div key={i} onClick={() => setCurrent(i)} className={`relative cursor-pointer w-16 h-16 mx-2 grayscale ${i === current && 'grayscale-0'}`}>
              <img src={el} alt='img' className='object-cover object-center w-full h-full absolute top-0 left-0' draggable="false" />
            </div>
          })}
          <button className="text-slate-100 text-4xl ml-8 hover:text-sky-600 duration-300" onClick={nextSlide}>&#10153;</button>
        </div>
      </div>

    </div>
  )
}

export default ModelDetails