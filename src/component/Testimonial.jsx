import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Testimonial = () => {


    useEffect(() => {
        const ctx = gsap.context(() => { 

        gsap.from(".revealUp", {
            scrollTrigger: { trigger: ".revealUp", start: "top 90%", end: "bottom 80%", scrub: 1, once: true },
            opacity: 0, y: '150%', duration: 1, stagger: 0.8
        })

    })
        return () => ctx.revert()

    }, [])


    return (
        <div className='flex flex-col items-center justify-center my-28 lg:my-36 space-y-6 text-3xl md:text-4xl uppercase font-bold'>

            <div className='text-center overflow-hidden'>
                <p className="revealUp">They are crafted with love and passion</p>
            </div>
            <div className='text-center overflow-hidden'>
                <p className="revealUp">each creation a testament to heartfelt dedication</p>
            </div>

        </div>
    )
}

export default Testimonial