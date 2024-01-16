import { useLayoutEffect, useRef } from 'react';
import Skull from "./Skull";
import ErrorBoundary from './ErrorBoundary';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import SplitType from "split-type";

function Hero() {

    const heroRef = useRef();
    const skullRef = useRef();

    //--skull pinned-----------------------//
    useLayoutEffect(() => {


        let mm = gsap.matchMedia();

        mm.add("(min-width: 800px)", () => {
            ScrollTrigger.create({
                trigger: heroRef.current,
                start: "top 12%",
                end: "bottom 85%",
                pin: skullRef.current,
                scrub: true,
                // markers: true
            })
        })

        mm.add("(max-width: 799px)", () => {
            ScrollTrigger.create({
                trigger: heroRef.current,
                start: "top 12%",
                end: "bottom 35%",
                pin: skullRef.current,
                scrub: true,
                // markers: true
            })
        })


        return () => mm.revert();

    }, []);




    useLayoutEffect(() => {

        let mm = gsap.matchMedia();
        //--mobile text animation-------------------//
        mm.add("(max-width: 767px)", () => {
            gsap.to(".text-reveal", {
                scrollTrigger: { trigger: ".text-reveal", scrub: 1, start: "top 53%", end: "center 55%" },
                opacity: 0
            })

            gsap.to(".text-reveal-2", {
                scrollTrigger: { trigger: ".text-reveal-2", scrub: 1, start: "top 53%", end: "center 55%" },
                opacity: 0,
            })

            gsap.to(".text-reveal-3", {
                scrollTrigger: { trigger: ".text-reveal-3", scrub: 1, start: "top 53%", end: "center 55%" },
                opacity: 0,
            })
        })


        //--desktop text animation-------------------//
        const secondtitle = new SplitType('#secondtitle', { types: 'words, chars' })
        const secondText = new SplitType('#secondText', { types: 'words, chars' })
        const thirdTitle = new SplitType('#thirdTitle', { types: 'words, chars' })
        const thirdText = new SplitType('#thirdText', { types: 'words, chars' })

        let tl = gsap.timeline();
        mm.add("(min-width: 768px)", () => {
            tl.from(secondtitle.chars, {
                scrollTrigger: { trigger: secondtitle.chars, start: 'top 90%', end: 'center 80%', scrub: true, once: true },
                opacity: 0.1,
                stagger: 0.2,
                ease: "back.out",
            })

                .from(secondText.chars, {
                    scrollTrigger: { trigger: secondText.chars, start: 'top 75%', end: 'bottom 53%', scrub: true, once: true },
                    opacity: 0.1,
                    stagger: 0.2,
                    ease: "back.out",
                })

            //---third section
            tl.from(thirdTitle.chars, {
                scrollTrigger: { trigger: thirdTitle.chars, start: 'top 90%', end: 'center 80%', scrub: true, once: true },
                opacity: 0.1,
                stagger: 0.2,
                ease: "back.out",
            })
                .from(thirdText.chars, {
                    scrollTrigger: { trigger: thirdText.chars, start: 'top 75%', end: 'bottom 53%', scrub: true, once: true },
                    opacity: 0.1,
                    stagger: 0.2,
                    ease: "back.out",
                })
        });

        return () => mm.revert();

    }, []);




    return (

        <div className="flex flex-col md:flex-row mb-40" ref={heroRef}>

            <div className="order-last md:order-first md:w-[60%] lg:w-1/2 ml-2.5 sm:ml-0">
                <section className="text-reveal flex items-center text-3xl md:text-4xl lg:text-5xl tracking-wide font-bold h-[45vh] md:h-[80vh]">
                    <p>
                        <span className="uppercase text-sky-600">Explore my creative sanctuary, </span>
                        <span id='firstText' className="rockText text-lg md:text-2xl"> where I use animal skulls as my medium to reshape the essence of nature</span>
                    </p>
                </section>

                <section className="text-reveal-2 flex items-center  text-3xl md:text-4xl lg:text-5xl tracking-wide font-bold h-[45vh] md:h-[80vh]">
                    <div>
                        <p id="secondtitle" className="uppercase text-sky-600">A unique decor</p>
                        <p id="secondText" className="rockText text-lg md:text-2xl">
                            that merges craft smanship with nature, as i transform relics into stunning works of art
                        </p>
                    </div>
                </section>


                <section className="text-reveal-3 flex items-center text-3xl md:text-4xl lg:text-5xl tracking-wide font-bold h-[45vh] md:h-[80vh]">
                    <div className="text">
                        <p id="thirdTitle" className="uppercase text-sky-600">Embrace the beauty</p>
                        <p id="thirdText" className="rockText text-lg md:text-2xl">
                        of reimagined wildlife and witness the magic of animal resurrection through my masterpieces.
                        </p>
                    </div>
                </section>

            </div>

            <div className="flex items-center justify-center order-first md:order-last md:w-[40%] lg:w-1/2 h-[40vh] md:h-[80vh] mt-4 md:mt-0" ref={skullRef}>
                <ErrorBoundary fallback={<p className='border border-red-600 p-2 rounded-md'>⚠️Something went wrong</p>}>
                    <Skull />
                </ErrorBoundary>
            </div>

        </div>

    )
}

export default Hero
