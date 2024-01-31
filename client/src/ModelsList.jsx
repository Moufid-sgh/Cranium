import React, { useRef, useLayoutEffect, Suspense, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Model from './component/Model';
import ErrorBoundary from './component/ErrorBoundary';
import { Loader } from './component/Functions/Loader';
import logo from '/white_logo.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ModelsList = () => {

    
    // get models--------------------------------------//
    const [data, setData] = useState([])
    useEffect(() => {

        const getModels = async () => {
            try {
                await axios.get(`${import.meta.env.VITE_URL}/getModels`).then(res => setData(res.data))
            } catch (error) {
                console.log(error)
            }
        }
        getModels()

    },[])

    
    const sortedModels = data?.sort((a,b) => new Date(a.date_creation) - new Date(b.date_creation))
   

    const firstLayer = useRef();
    const secondLayer = useRef();
    const navRef = useRef();

    useLayoutEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

        let ctx = gsap.context(() => {
            tl.fromTo(firstLayer.current, { y: '100%' }, { y: '-100%', duration: 1.2 })
            tl.fromTo(secondLayer.current, { y: '100%' }, { y: '0%', duration: 1.2 }, "-=1")
            tl.fromTo(navRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
        });

        return () => ctx.revert()
    }, []);



    return (
        <div className='bg-[#090909]  pb-6'>

            <div ref={firstLayer} className='fixed top-0 left-0 w-full h-screen bg-[#E6EAF5]'></div>

            <div ref={secondLayer} className='w-full min-h-screen text-slate-200 px-2 md:px-8 lg:px-16'>


                <nav ref={navRef} className='flex items-center justify-between px-4 md:px-0 pt-4'>
                    <Link to='/'>
                        <img src={logo} alt='logo' className='w-28 md:w-32 hover:opacity-80 duration-300' />
                    </Link>

                    <svg version="1.1" viewBox="0 0 26 26" className='w-8 h-8 cursor-pointer hover:opacity-80 duration-500'>
                        <g>
                            <path d="M1.75,7.75h6.6803589c0.3355713,1.2952271,1.5039063,2.2587891,2.9026489,2.2587891   S13.9000854,9.0452271,14.2356567,7.75H24.25C24.6640625,7.75,25,7.4140625,25,7s-0.3359375-0.75-0.75-0.75H14.2356567   c-0.3355713-1.2952271-1.5039063-2.2587891-2.9026489-2.2587891S8.7659302,4.9547729,8.4303589,6.25H1.75   C1.3359375,6.25,1,6.5859375,1,7S1.3359375,7.75,1.75,7.75z M11.3330078,5.4912109   c0.8320313,0,1.5087891,0.6767578,1.5087891,1.5087891s-0.6767578,1.5087891-1.5087891,1.5087891S9.8242188,7.8320313,9.8242188,7   S10.5009766,5.4912109,11.3330078,5.4912109z" fill="#fff" />
                            <path d="M24.25,12.25h-1.6061401c-0.3355713-1.2952271-1.5039063-2.2587891-2.9026489-2.2587891   S17.1741333,10.9547729,16.838562,12.25H1.75C1.3359375,12.25,1,12.5859375,1,13s0.3359375,0.75,0.75,0.75h15.088562   c0.3355713,1.2952271,1.5039063,2.2587891,2.9026489,2.2587891s2.5670776-0.963562,2.9026489-2.2587891H24.25   c0.4140625,0,0.75-0.3359375,0.75-0.75S24.6640625,12.25,24.25,12.25z M19.7412109,14.5087891   c-0.8320313,0-1.5087891-0.6767578-1.5087891-1.5087891s0.6767578-1.5087891,1.5087891-1.5087891S21.25,12.1679688,21.25,13   S20.5732422,14.5087891,19.7412109,14.5087891z" fill="#fff" />
                            <path d="M24.25,18.25H9.7181396c-0.3355103-1.2952271-1.5037842-2.2587891-2.9017334-2.2587891   c-1.3987427,0-2.5670776,0.963562-2.9026489,2.2587891H1.75C1.3359375,18.25,1,18.5859375,1,19s0.3359375,0.75,0.75,0.75h2.1637573   c0.3355713,1.2952271,1.5039063,2.2587891,2.9026489,2.2587891c1.3979492,0,2.5662231-0.963562,2.9017334-2.2587891H24.25   c0.4140625,0,0.75-0.3359375,0.75-0.75S24.6640625,18.25,24.25,18.25z M6.8164063,20.5087891   c-0.8320313,0-1.5087891-0.6767578-1.5087891-1.5087891s0.6767578-1.5087891,1.5087891-1.5087891   c0.8310547,0,1.5078125,0.6767578,1.5078125,1.5087891S7.6474609,20.5087891,6.8164063,20.5087891z" fill="#fff" />
                        </g>
                    </svg>
                </nav>


                <div className='flex justify-center md:justify-normal flex-wrap lg:mt-6'>
                    {sortedModels.map((el) => {
                        return <div key={el.id}>
                            <ErrorBoundary fallback={<p className="flex items-center justify-center text-slate-200 h-[400px]">⚠️ unexpected error</p>}>
                                <Suspense fallback={Loader()}>
                                    <Model el={el} />
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