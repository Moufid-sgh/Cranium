import React, { useRef, useState, useLayoutEffect, useEffect, Suspense } from 'react';
import { gsap } from "gsap";
import Model from './component/Model';
import ErrorBoundary from './component/ErrorBoundary';
import { Loader } from './component/Functions/Loader';

import ox0 from "/ox/ox-0.jpg"
import ox1 from "/ox/ox-1.jpg"
import ox2 from "/ox/ox-2.jpg"
import ox3 from "/ox/ox-3.jpg"
import ox4 from "/ox/ox-4.jpg"
import ox5 from "/ox/ox-5.jpg"
import ox7 from "/ox/ox-7.jpg"

const ModelsList = () => {

    const oxHead = [{ name: "oxHead", img: ox0, imgList: [ox0, ox1, ox2, ox3] }, { name: "oxHead", img: ox1, imgList: [ox5, ox1, ox2, ox3] }, { name: "oxHead", img: ox2, imgList: [ox7, ox1, ox2, ox3] }, { name: "oxHead", img: ox3, imgList: [ox0, ox1, ox2, ox3] },
    { name: "oxHead", img: ox4, imgList: [ox0, ox1, ox2, ox3] }, { name: "oxHead", img: ox5, imgList: [ox0, ox1, ox2, ox3] }, { name: "oxHead", img: ox7, imgList: [ox0, ox1, ox2, ox3] }]

    const firstLayer = useRef();
    const secondLayer = useRef();
    const navRef = useRef();

    useLayoutEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

        let ctx = gsap.context(() => {
            tl.fromTo(firstLayer.current, { y: '100%' }, { y: '-100%', duration: 1.2 })
            tl.fromTo(secondLayer.current, { y: '100%' }, { y: '0%', duration: 1.2 }, "-=1")
            tl.fromTo(navRef.current, { opacity: 0}, { opacity: 1, duration: 1 })
        });

        return () => ctx.revert()
    }, []);



    //-------mouse animation-------------------------------------------// 
    const mouseRef = useRef();

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



    return (
        <div className='bg-[#090909]'>

            <div ref={firstLayer} className='fixed top-0 left-0 w-full h-screen bg-[#E6EAF5]'></div>

            <div ref={secondLayer} className='w-full h-fit text-slate-200 px-2 md:px-8 lg:px-16'>

                <div ref={mouseRef} className="glass opacity-0 fixed top-5 left-[-40px] z-10 w-24 h-24 rounded-full flex items-center justify-center text-base text-slate-200 tracking-wider">
                    Discover
                </div>

                <nav ref={navRef} className='flex items-center justify-between pt-4'>
                    <h1 className="tracking-wide text-2xl font-bold">Cranium</h1>
                    <p>FILTER</p>
                </nav>

                <div className='flex justify-center md:justify-between flex-wrap lg:mt-6'>
                    {oxHead.map((el, i) => {
                        return <div key={i}>
                            <ErrorBoundary fallback={<p className="flex items-center justify-center text-slate-200 h-[400px]">⚠️ unexpected error</p>}>
                                <Suspense fallback={Loader()}>
                                    <Model el={el}  />
                                </Suspense>
                            </ErrorBoundary>
                        </div>
                    })}
                </div>

            </div>
        </div>
    )
}

export default ModelsList