import { Suspense, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ModelOverview from "./ModelOverview";
import ErrorBoundary from "./ErrorBoundary";
import { Loader } from "./Functions/Loader";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../component/Functions/SliderControl"


import ox0 from "/preview/ox-0.webp"
import ox1 from "/preview/ox-1.webp"
import ox2 from "/preview/ox-2.webp"
import ox3 from "/preview/ox-3.webp"
import ox4 from "/preview/ox-4.webp"
import ox5 from "/preview/ox-5.webp"
import ox6 from "/preview/ox-6.webp"
import ox7 from "/preview/ox-7.webp"
import ox8 from "/preview/ox-8.webp"


function ModelSection() {

    const oxHead = [ox0, ox1, ox2, ox3, ox4, ox5, ox6, ox7, ox8]

    const modelSectionRef = useRef();


    useEffect(() => {

        let ctx = gsap.context(() => {

            gsap.to(modelSectionRef.current, {
                scrollTrigger: {
                    trigger: modelSectionRef.current,
                    start: "top 90%",
                    end: "25% 80%",
                    scrub: true,
                    once: true,
                },
                width: "100%",
                ease: "power1.inOut"
            })
        })

        return () => ctx.revert();

    }, []);


    
    //----title aniamtion--------------------------------//

    const modelTitle = useRef();

    useEffect(() => {

        
        let tl = gsap.timeline();

        let ctx = gsap.context(() => {

            tl.from(modelTitle.current, {
                scrollTrigger: {
                    trigger: modelSectionRef.current,
                    start: 'top 30%',
                    end: '80% 90%',
                    scrub: true,
                    once: true,
                },
                opacity: 0,
                y: '200%',
                skewY: '20%',
                duration: 1,
                ease: "power1.inOut"
            })
        })

        return () => ctx.revert();

    }, []);




    return (
        <div className="flex items-center justify-center">
            <div ref={modelSectionRef} className='relative flex flex-col items-center justify-center bg-[#090909] h-screen w-[0%] rounded-3xl lg:px-8'>


          <div className='absolute top-4 left-6 text-slate-200 text-xl tracking-wider overflow-hidden'>
            <h1 ref={modelTitle}>MODELS</h1>
          </div>


                <div className="flex flex-col justify-center h-[85%] lg:h-[70%] w-[95%]">
                    <Slider {...settings}>
                        {oxHead.map((el, i) => {
                            return <div key={i}>
                                <ErrorBoundary fallback={<p className="flex items-center justify-center text-slate-200 h-[400px]">⚠️ unexpected error</p>}>
                                    <Suspense fallback={Loader()}>
                                        <ModelOverview el={el} />
                                    </Suspense>
                                </ErrorBoundary>
                            </div>
                        })}
                    </Slider>
                </div>


                <Link to="/models" className="group absolute bottom-4 right-8 flex space-x-2 text-slate-200 cursor-pointer">
                    <p className="tracking-wider">Discover more</p>
                    <p className="text-xl group-hover:translate-x-2 duration-300">&#10140;</p>
                </Link>

            </div>
        </div>
    )
}

export default ModelSection