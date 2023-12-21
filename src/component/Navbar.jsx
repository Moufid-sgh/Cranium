import { useRef } from 'react'

function Navbar() {

  //mouse hover effect
  const handleMouseMove = (e) => {

    const btns = document.querySelectorAll(".btn")

    btns.forEach((btn) => {
      const x = e.clientX - btn.offsetLeft;
      const y = e.clientY - btn.offsetTop;

      btn.style.setProperty("--x", x + "px");
      btn.style.setProperty("--y", y + "px");
    })

  };


  return (
    <nav className="flex items-center justify-between h-20">
      <h1 className="tracking-wide text-2xl font-bold">Cranium</h1>

      <ul className="flex justify-around border md:w-[35%] lg:w-[22%]">
        <li className="btn border border-[#090909]" onMouseMove={handleMouseMove}>
          <a>Models</a>
        </li>

        <li className="btn border border-[#090909]" onMouseMove={handleMouseMove}>
          <a>Contact</a>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar