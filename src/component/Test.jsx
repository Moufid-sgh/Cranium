import { Suspense, useEffect, useRef, useState } from "react";
import ModelTest from "./ModelTest";
import ErrorBoundary from "./ErrorBoundary";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(ScrollTrigger, Draggable);

import { motion } from "framer-motion";

import ModelDetails from "./ModelDetails";

import ox0 from "/ox/ox-0.jpg"
import ox1 from "/ox/ox-1.jpg"
import ox2 from "/ox/ox-2.jpg"
import ox3 from "/ox/ox-3.jpg"
import ox4 from "/ox/ox-4.jpg"
import ox5 from "/ox/ox-5.jpg"
import ox7 from "/ox/ox-7.jpg"


function Test() {

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
                model.addEventListener('mouseenter', () => { gsap.to(mouseRef.current, 0.5, { scale: 1, opacity: 1, ease: "power1.out" }) });
                model.removeEventListener('mouseenter', () => { gsap.to(mouseRef.current, 0.5, { scale: 1, opacity: 1 }) });

                model.addEventListener('mouseleave', () => { gsap.to(mouseRef.current, 0.5, { scale: 0, opacity: 0, ease: "power1.inOut" }) });
                model.removeEventListener('mouseleave', () => { gsap.to(mouseRef.current, 0.5, { scale: 0, opacity: 0 }) });

                model.addEventListener('mousemove', (e) => { gsap.to(mouseRef.current, 0.5, { x: e.clientX, y: e.clientY }) });
                model.removeEventListener('mousemove', (e) => { gsap.to(mouseRef.current, 0.5, { x: e.clientX, y: e.clientY }) });

            });
        })

        return () => ctx.revert()
    }, []);



    function loader() {
        return (
            <div className="flex items-center justify-center space-x-2 h-[400px]">
                <svg aria-hidden="true" class="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <p className="text-slate-200">loading</p>
            </div>
        )
    };


    //---carousel---------------------------//
    const carouselRef = useRef();

    const [width, setWidth] = useState(0);

    useEffect(() => {

        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)

    }, []);

    const [swipeOn, setSwipeOn] = useState(false);

    const oxHead = [{ name: "oxHead", img: ox0 }, { name: "oxHead", img: ox1 }, { name: "oxHead", img: ox2 }, { name: "oxHead", img: ox3 },
    { name: "oxHead", img: ox4 }, { name: "oxHead", img: ox5 }, { name: "oxHead", img: ox7 }]



    return (
        <div ref={modelSectionRef} className='relative flex flex-col items-center justify-center bg-[#090909] h-[97vh] rounded-3xl lg:px-16'>

            <h2 className="absolute top-4 left-6 text-[#e6eaf5] text-xl tracking-wider">{title.split("").map((letter, i) => {
                return <span key={i} className="letter-reveal">{letter}</span>
            })}
            </h2>

            {!swipeOn && <div ref={mouseRef} className="glass opacity-0 fixed top-5 left-[-40px] z-50 w-24 h-24 rounded-full flex items-center justify-center text-base text-slate-200 tracking-wider">
                Discover
            </div>}

            <motion.div className="w-full active:cursor-grab overflow-hidden">
                <motion.div ref={carouselRef} drag="x" dragConstraints={{ right: 0, left: -width }} className="flex space-x-12">
                    {oxHead.map((el, i) => {
                        return <div key={i} >
                            <ErrorBoundary fallback={<p className="flex items-center justify-center text-slate-200 h-[400px]">⚠️ unexpected error</p>}>
                                <Suspense fallback={loader()}>
                                    <ModelTest el={el} setSwipeOn={setSwipeOn} index={i} />
                                </Suspense>
                            </ErrorBoundary>
                        </div>
                    })}
                </motion.div>
            </motion.div>



            // {/* <div className="absolute bottom-4 right-10 space-x-3 text-2xl">
            //     <button className="text-slate-200 rotate-180 hover:opacity-80 duration-300" onClick={() => sliderRef.current.slickPrev()}>&#10132;</button>
            //     <button className="text-slate-200 hover:opacity-80 duration-300" onClick={() => sliderRef.current.slickNext()}>&#10132;</button>
            // </div> */}

        </div>
    )
}

export default Test