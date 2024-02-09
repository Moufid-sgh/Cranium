import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function ModelOverview({ el, setModelOn }) {

  const containerRef = useRef();
  const imgRef = useRef();


  useEffect(() => {
    let ctx = gsap.context(() => {

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 20%",
          end: "center center",
        }
      });

      tl.set(containerRef.current, { autoAlpha: 1 });
      tl.from(containerRef.current, 1.5, 
        {xPercent: -100, ease: "power2.out"}
      );
      tl.from(imgRef.current, 1.5, 
        { xPercent: 100, scale: 1.3, delay: -1.5, ease: "power2.out"}
      );
     
    });
                                                                                        
    return () => ctx.revert();

  }, [])



  //----handle mouse click and drag-----------------------------------------//

  const handleImageClick = (e) => {
      e.stopPropagation();
       const mouseUp = e.clientX;
    if (
      mouseUp < window.checkForDrag + 6 &&
      mouseUp > window.checkForDrag - 6
    ) {
      setModelOn(true);
      setIndex(i)
    }
  };

  const mouseDownCoords = (e) => {
    window.checkForDrag = e.clientX;
  };



  return ( 
    <div className='w-full h-full active:scale-95 duration-300 ease' 
         onMouseDown={e => mouseDownCoords(e)}  
         onClick={handleImageClick}> 

      <div className='model h-[600px] lg:h-[470px] flex justify-center items-center w-full relative overflow-hidden invisible cursor-pointer active:cursor-grab' ref={containerRef}>
        <img src={el} loading="lazy" alt='skull' ref={imgRef} />
      </div>


    </div>
  )
}

export default ModelOverview