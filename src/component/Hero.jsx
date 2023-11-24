import React from 'react';
import { useEffect, useRef } from "react";
import Skull from "./Skull";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MobileTextAnim } from "./Functions/MobileTextAnim";
import { DesktopTextAnim } from "./Functions/DesktopTextAnim";
gsap.registerPlugin(ScrollTrigger);



function Hero() {

    const heroRef = useRef();
    const skullRef = useRef();

    useEffect(() => {

        let ctx = gsap.context(() => {

            let mm = gsap.matchMedia();
            //--mobile text animation-------------------//
            MobileTextAnim()

            //--desktop text animation-------------------//
            DesktopTextAnim();

            //--skull pinned-----------------------//
            mm.add("(min-width: 768px)", () => {
                ScrollTrigger.create({
                    trigger: heroRef.current,
                    start: "top 12%",
                    end: "bottom 85%",
                    pin: skullRef.current,
                    scrub: true,
                    // markers: true
                })
            })

            mm.add("(max-width: 767px)", () => {
                ScrollTrigger.create({
                    trigger: heroRef.current,
                    start: "top 12%",
                    end: "bottom 35%",
                    pin: skullRef.current,
                    scrub: true,
                    // markers: true
                })
            })

        })

        return () => ctx.revert();

    }, []);


    const firstTitle = "A unique decor"
    const secondTitle = "Embrace the beauty"
    const textTwo = "that merges craft smanship with nature, as i transform relics into stunning works of art"
    const textThree = "of reimagined wildlife and witness the magic of animal resurrection through my masterpieces."


    return (

        <div className="flex flex-col md:flex-row mb-40" ref={heroRef}>

            <div className="order-last md:order-first md:w-[60%] lg:w-1/2 ml-2.5 sm:ml-0">
                <section className="text-reveal flex items-center justify-center text-3xl md:text-4xl lg:text-5xl tracking-wide font-bold h-[45vh] md:h-[80vh]">
                    <p>
                        <span className="uppercase text-[#0e7490]">Explore my creative sanctuary, </span>
                        <span className="rockText text-lg md:text-2xl"> where I use animal skulls as my medium to reshape the essence of nature</span>
                    </p>
                </section>

                <section className="text-reveal-2 flex items-center justify-center text-3xl md:text-4xl lg:text-5xl tracking-wide font-bold h-[45vh] md:h-[80vh]">
                    <div className="text">
                        <p className="uppercase text-[#0e7490]">{firstTitle.split("").map((letter, i) => {
                            return <span key={i} className="split-title">{letter}</span>
                        })}
                        </p>
                        <p className="rockText text-lg md:text-2xl">{textTwo.split("").map((letter, i) => {
                            return <span key={i} className="char leading-[50px]">{letter}</span>
                        })}
                        </p>
                    </div>
                </section>


                <section className="text-reveal-3 flex items-center justify-center text-3xl md:text-4xl lg:text-5xl tracking-wide font-bold h-[45vh] md:h-[80vh]">
                    <div className="text">
                        <p className="uppercase text-[#0e7490]">{secondTitle.split("").map((letter, i) => {
                            return <span key={i} className="split-title-2">{letter}</span>
                        })}
                        </p>
                        <p className="rockText text-lg md:text-2xl">{textThree.split("").map((letter, i) => {
                            return <span key={i} className="char-2 leading-[50px]">{letter}</span>
                        })}</p>
                    </div>
                </section>

            </div>

            <div className="flex items-center justify-center order-first md:order-last md:w-[40%] lg:w-1/2 h-[40vh] md:h-[80vh] mt-4 md:mt-0" ref={skullRef}>
                <Skull />
            </div>

        </div>

    )
}

export default Hero
