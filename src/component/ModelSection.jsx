import { Suspense, useEffect, useLayoutEffect, useRef } from "react";
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


import ox0 from "/ox/ox-0.jpg"
import ox1 from "/ox/ox-1.jpg"
import ox2 from "/ox/ox-2.jpg"
import ox3 from "/ox/ox-3.jpg"
import ox4 from "/ox/ox-4.jpg"
import ox5 from "/ox/ox-5.jpg"
import ox7 from "/ox/ox-7.jpg"


function ModelSection() {

    const oxHead = [{ name: "oxHead", img: ox0 }, { name: "oxHead", img: ox1 }, { name: "oxyoyo", img: ox2 }, { name: "oxHead", img: ox3 },
    { name: "oxHead", img: ox4 }, { name: "oxHead", img: ox5 }, { name: "oxHead", img: ox7 }]

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
    useEffect(() => {

        let lettrers = document.querySelectorAll('.letter-reveal');
        
        let tl = gsap.timeline();

        let ctx = gsap.context(() => {

            tl.from(lettrers, {
                scrollTrigger: {
                    trigger: modelSectionRef.current,
                    start: 'top 30%',
                    end: '80% 90%',
                    scrub: true,
                    // once: true,
                },
                opacity: 0,
                stagger: 0.2,
                ease: "back.out",
            })
        })

        return () => ctx.revert();

    }, []);




    return (
        <div className="flex items-center justify-center">
            <div ref={modelSectionRef} className='relative flex flex-col items-center justify-center bg-[#090909] h-screen w-[0%] rounded-3xl lg:px-8'>

                <div className="absolute top-4 left-6 text-slate-200 text-xl tracking-wider">
                    <span className="letter-reveal">M</span>
                    <span className="letter-reveal">O</span>
                    <span className="letter-reveal">D</span>
                    <span className="letter-reveal">E</span>
                    <span className="letter-reveal">L</span>
                    <span className="letter-reveal">S</span>
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