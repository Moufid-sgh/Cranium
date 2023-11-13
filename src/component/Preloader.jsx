import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';


const Preloader = () => {

    const progressBar = useRef();
    const nameRef = useRef();
    const higherSection = useRef();
    const lowerSection = useRef();

    useLayoutEffect(() => {

        const ctx = gsap.context(() => {
            
            const tl = gsap.timeline();

              tl.to(progressBar.current, { duration: 1, width: "50px", ease: "sine.out" })
                .to(progressBar.current, { duration: 0.4, width: "280px", ease: "sine.out" })
                .to(progressBar.current, { duration: 1, width: "50px", ease: "sine.out" })
                .to(progressBar.current, { duration: 0.4, width: "280px", ease: "sine.out" })
                .to(progressBar.current, { duration: 1, width: "50px", ease: "sine.out" })
                .to(progressBar.current, { duration: 0.6, width: "100vw", ease: "sine.out" })
                .to(nameRef.current, {duration: 0.2, opacity: 0})
                
              gsap.to(higherSection.current, {duration: 1, delay: 4.5, translateY: "-400px"})
              gsap.to(lowerSection.current, {duration: 1, delay: 4.5, translateY: "400px"})
        })

        return () => ctx.revert();

    }, []);


    return (
        <>
            <div ref={higherSection} className='fixed top-0 left-0 right-0 h-1/2 w-screen z-30 flex flex-col items-center justify-end bg-[#090909]'>
                <p ref={nameRef} className='tracking-widest text-xl text-[#e6eaf5] mb-3'>Cranium</p>
                <div ref={progressBar} className='bg-[#e6eaf5] h-[0.7px]'></div>
            </div>

            <div ref={lowerSection} className='bottomBlock fixed bottom-0 left-0 right-0 h-1/2 w-screen z-30 bg-[#090909]'></div>
        </>
    )
}

export default Preloader

