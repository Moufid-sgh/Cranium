import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import logo from "/black_logo.png"


function Navbar() {


  //-----mobile nav--------------------------------------//
  const [navOn, setNAvOn] = useState(false)

  const firstLayer = useRef();
  const secondLayer = useRef();
  const modelRef = useRef();
  const contactRef = useRef();
  const socialRef = useRef();



  useEffect(() => {

    const tl  = gsap.timeline({defaults: { ease: 'power3.out' } })

    if(navOn) {
      tl.to(firstLayer.current, { x: '90%', duration: 1.2 })
      tl.to(secondLayer.current, { x: '0%', duration: 1.2 }, "-=1")
      tl.from(modelRef.current, { opacity: 0, y: '100%', skewY: '20%', duration: 0.8 }, "-=0.5")
      tl.from(contactRef.current, { opacity: 0, y: '100%', skewY: '20%', duration: 0.8 })
      tl.from(socialRef.current, { opacity: 0, scale:0.8, duration: 0.8 })
    }
    else {
      tl.to(firstLayer.current, { x: '-100%', duration: 1 })
      tl.to(secondLayer.current, { x: '-100%', duration: 1 }, "-=1")
    }
    
    return () => tl.kill()

  },[navOn])


    //----scroll to contact------------------------------//
    const goToContact = (e) => {
      e.preventDefault();
  
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
      })
      

      if(navOn) {
       setTimeout(() => setNAvOn(false), 600)
      }
    };


  return (
    <nav className="flex items-center justify-between h-20">

      <img src={logo} alt='logo' className='w-28 md:w-32 mt-3' />

      <div className="hidden md:block flex space-x-8">
        <Link to="/models">
          <button className='navbar_btn'>
            Models
            <span className="first"></span>
            <span className="second"></span>
            <span className="third"></span>
            <span className="fourth"></span>
          </button>
        </Link>

        <button className='navbar_btn' onClick={goToContact}>
          Contact
          <span className="first"></span>
          <span className="second"></span>
          <span className="third"></span>
          <span className="fourth"></span>
        </button>
      </div>



      {/* mobile view *------------------------------------------------------------*/}

      <div className='group md:hidden space-y-1.5 cursor-pointer' 
           onClick={() => setNAvOn(true)}>
        <p className='w-8 h-[3px] bg-[#090909]'></p>
        <p className='w-6 h-[3px] bg-[#090909] group-hover:translate-x-2 duration-500 ease-out'></p>
        <p className='w-8 h-[3px] bg-[#090909]'></p>
      </div>


        <>
          <div ref={firstLayer} className='fixed top-0 left-0 w-full h-screen bg-[#E6EAF5] z-30 translate-x-[-100%]'></div>

          <div ref={secondLayer} className='fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-[#090909] translate-x-[-100%] z-40'>

            <span onClick={() => setNAvOn(false)}
              className='absolute top-4 right-5 z-20 font-weight text-2xl text-slate-100 hover:text-sky-600 duration-300 cursor-pointer'>
              &#10007;
            </span>

            <div className='text-slate-200 text-2xl space-y-6 tracking-wide'>
              <Link to="/models" className='relative overflow-hidden block hover:text-sky-600 duration-300 cursor-pointer'>
                  <p ref={modelRef}>MODELS</p>
              </Link>
              <div className='relative overflow-hidden hover:text-sky-600 duration-300 cursor-pointer'
                  onClick={goToContact}>
                <p ref={contactRef}>CONTACT</p>
              </div>
            </div>

            <div ref={socialRef} className='flex items-center space-x-6 mt-12'>
              <a href='https://www.facebook.com/profile.php?id=100076472701454' target='_blank'>
                <svg className='cursor-pointer hover:scale-110 duration-300' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 64 64">
                  <path d="M48,7H16c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h17V38h-6v-7h6v-5c0-7,4-11,10-11c3.133,0,5,1,5,1v6h-4 c-2.86,0-4,2.093-4,4v5h7l-1,7h-6v17h8c4.418,0,8-3.582,8-8V15C56,10.582,52.418,7,48,7z" stroke='white'></path>
                </svg>
              </a>

              <a href='https://www.instagram.com/official_cranium?igsh=MWU0N3ZicjdscjlvMg==' target='_blank'>
                <svg className='cursor-pointer hover:scale-110 duration-300' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                  <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" stroke='white'></path>
                </svg>
              </a>

              <a href='https://www.tiktok.com/@c_r_a_n_i_u_m?_t=8irOVHJR2vu&_r=1' target='_blank'>
                <svg className=' cursor-pointer hover:scale-110 duration-300' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                  <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" stroke='white'></path>
                </svg>
              </a>

            </div>
          </div>
        </>

    </nav>
  )
}

export default Navbar