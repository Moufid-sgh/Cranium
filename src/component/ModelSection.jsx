import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ModelSection() {

    const modelRef = useRef();

    useEffect(() => {
        
        let ctx = gsap.context(() => {

            // let tl = gsap.timeline();
            
            gsap.to(modelRef.current, {
                scrollTrigger : {
                    trigger: modelRef.current,
                    start: "top 90%",
                    end: "25% 80%",
                    scrub: true,
                    once: true,
                    // markers: true
                },
                width: "100%", 
                ease: "power1.inOut"
            })

            gsap.from('.letter-reveal', {
                scrollTrigger: {
                    trigger: modelRef.current,
                    start: 'top 30%',
                    end: '80% 90%',
                    scrub: true,
                    once: true,
                },
                opacity: 0,
                stagger: 0.2,
                ease: "back.out",
            })
            
        })

        return () => ctx.revert();

    },[]);

    const title = "Model"

  return (
    <div ref={modelRef} className='bg-[#090909] w-[30%] h-screen rounded-3xl'>

        <h2 className="text-[#e6eaf5]  text-xl tracking-wider p-5">{title.split("").map((letter,i) => {
            return <span key={i} className="letter-reveal">{letter}</span>
        })}
        </h2>

        
    </div>
  )
}

export default ModelSection