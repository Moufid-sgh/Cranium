import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { gsap } from 'gsap';


function Contact() {

  const form = useRef();
  const msgRef = useRef();

  const [msgSent, setMsgSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [empty, setEmpty] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (!name) {
      setEmpty("nameError")
    }
    else if (!email) {
      setEmpty("emailError")
    }
    else if (!message) {
      setEmpty("messageError")
    }

    else {
      emailjs.sendForm('service_vwc4nbq', 'template_slrazvb', form.current, 'XW1slLsWzHUzHXl_R')
        .then((result) => {
          setMsgSent(true)
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });

      e.target.reset();
    }
  };

  //----msg banner animation---------------------//
  useEffect(() => {

    const ctx = gsap.context(() => {
      if (msgSent) {
        gsap.fromTo(msgRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power4.easeIn' })
      }
    })

    return () => ctx.revert();
  }, [msgSent])


  //----clear msg banner----------------------//
  useEffect(() => {
    if (msgSent) {
      setTimeout(() => {
        setMsgSent(false)
      }, 5000)
    }
  }, [msgSent])



  return (
    <footer className='flex flex-col items-center border border-[#090909] rounded-3xl p-8 mt-24 mb-12 md:mb-6'>
      <div>
        <h3 className='text-2xl lg:text-3xl uppercase italic'>Got project in mind ? Let's connect</h3>

        <form className='mt-8 flex flex-col items-center' ref={form} onSubmit={sendEmail}>
          <input type='text' placeholder='Name' name="user_name"
            className={`${empty === 'nameError' ? 'border-b border-red-500 placeholder-red-500' : 'border-b border-[#090909] placeholder-gray-600'} w-80 bg-transparent block focus:outline-none focus:border-b-2 py-2 tracking-wide capitalize`}
            onChange={e => setName(e.target.value)}
          />

          <input type='email' placeholder='Email' cname="user_email"
            className={`${empty === 'emailError' ? 'border-b border-red-500 placeholder-red-500' : 'border-b border-[#090909] placeholder-gray-600'} w-80 my-4 bg-transparent block focus:outline-none focus:border-b-2 py-2 tracking-wide`}
            onChange={e => setEmail(e.target.value)}
          />

          <textarea placeholder='Message' name="message"
            className={`${empty === 'messageError' ? 'border-b border-red-500 placeholder-red-500' : 'border-b border-[#090909] placeholder-gray-600'} w-80 h-20 resize-none bg-transparent overflow-hidden block border-b border-[#090909] focus:outline-none focus:border-b-2 py-2 tracking-wide placeholder-gray-600`}
            onChange={e => setMessage(e.target.value)}>
          </textarea>

          {!msgSent ? <input type="submit" value="Send" 
              className='relative block border border-[#090909] rounded-2xl tracking-wide px-7 py-1.5 mt-6 z-10 hover:text-slate-200 hover:bg-[#090909] duration-500 ease-out cursor-pointer ' />
            : <p ref={msgRef} className='py-1.5 px-4 mt-6 text-center bg-[#090909] text-slate-200'>Got your message ! I'll be in touch soon. Thanks !</p>
          }


        </form>
      </div>

      <div className='md:flex items-center mt-12 md:space-x-12'>
        <p className='md:text-lg'>Feel free to connect with me on social</p>

        <div className='flex items-center justify-center space-x-6 md:space-x-3 mt-3 md:mt-0'>
          <a href='https://www.facebook.com/profile.php?id=100076472701454' target='_blank'>
            <svg className='cursor-pointer hover:scale-110 duration-300' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 64 64">
              <path d="M48,7H16c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h17V38h-6v-7h6v-5c0-7,4-11,10-11c3.133,0,5,1,5,1v6h-4 c-2.86,0-4,2.093-4,4v5h7l-1,7h-6v17h8c4.418,0,8-3.582,8-8V15C56,10.582,52.418,7,48,7z"></path>
            </svg>
          </a>

          <a href='https://www.instagram.com/official_cranium?igsh=MWU0N3ZicjdscjlvMg==' target='_blank'>
            <svg className='cursor-pointer hover:scale-110 duration-300' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
              <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
            </svg>
          </a>

          <a href='https://www.tiktok.com/@c_r_a_n_i_u_m?_t=8irOVHJR2vu&_r=1' target='_blank'>
          <svg className=' cursor-pointer hover:scale-110 duration-300' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
            <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
          </svg>
          </a>

        </div>
      </div>

      <hr className='text-[#090909]' />

      <div className='text-xs w-full text-end mt-8'>
        <h5><span className='font-sans'>&#169;</span> {new Date().getFullYear()}, Cranium, All Rights Reserved.</h5>
      </div>

    </footer>
  )
}

export default Contact