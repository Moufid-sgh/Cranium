import { useEffect, useRef } from "react";
import Model from "./Model";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../component/Functions/SliderControl"



function ModelSection() {

    const modelSectionRef = useRef();
    const sliderRef = useRef();
    const mouseRef = useRef();

    const title = "Model"


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

            gsap.from('.letter-reveal', {
                scrollTrigger: {
                    trigger: modelSectionRef.current,
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

    }, []);

    //-------mouse animation------------------------// 
    useEffect(() => {

        const ctx = gsap.context(() => {

            const models = document.querySelectorAll(".model");

            models.forEach((model) => {
                model.addEventListener('mouseenter', () => { gsap.to(mouseRef.current, 0.5, { scale: 1, opacity: 1, ease:"power1.out" }) });
                model.removeEventListener('mouseenter', () => { gsap.to(mouseRef.current, 0.5, { scale: 1, opacity: 1 })});

                model.addEventListener('mouseleave', () => { gsap.to(mouseRef.current, 0.5, { scale: 0, opacity: 0 }) });
                model.removeEventListener('mouseleave', () => { gsap.to(mouseRef.current, 0.5, { scale: 0, opacity: 0 }) });

                model.addEventListener('mousemove', (e) => {  gsap.to(mouseRef.current, 0.5, { x: e.clientX, y: e.clientY }) });
                model.removeEventListener('mousemove', (e) => {  gsap.to(mouseRef.current, 0.5, { x: e.clientX, y: e.clientY }) });

            });
        })

        return () => ctx.revert()
    }, []);




    return (
        <div ref={modelSectionRef} className='relative flex flex-col items-center justify-center bg-[#090909] h-[97vh] rounded-3xl lg:px-8'>

            <h2 className="absolute top-4 left-6 text-[#e6eaf5] text-xl tracking-wider">{title.split("").map((letter, i) => {
                return <span key={i} className="letter-reveal">{letter}</span>
            })}
            </h2>

            <div ref={mouseRef} className="glass opacity-0 fixed top-5 left-[-40px] z-10 w-24 h-24 rounded-full flex items-center justify-center text-base text-slate-200 tracking-wider">
                Discover
            </div>

            <div className="sm:mt-24 lg:mt-4 h-[85%] lg:h-[70%] w-full lg:w-[90%]">

                <Slider {...settings} ref={sliderRef}>

                    {[...Array(8)].map((el, i) => {
                        return <div key={i} >
                            <Model />
                        </div>
                    })}
                </Slider>
            </div>

            <div className="absolute bottom-4 right-10 space-x-3 text-2xl">
                <button className="text-slate-200 rotate-180 hover:opacity-80 duration-300" onClick={() => sliderRef.current.slickPrev()}>&#10132;</button>
                <button className="text-slate-200 hover:opacity-80 duration-300" onClick={() => sliderRef.current.slickNext()}>&#10132;</button>
            </div>

        </div>
    )
}

export default ModelSection