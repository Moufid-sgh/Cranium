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
      <h3 className="tracking-wide text-2xl font-bold">Cranium</h3>

      <div className="flex justify-around border md:w-[35%] lg:w-[22%]">
        <a className="btn border border--[#090909]" onMouseMove={handleMouseMove}>
          <span>Model</span>
        </a>

        <a className="btn border border-[#090909]" onMouseMove={handleMouseMove}>
          <span>Contact</span>
        </a>
      </div>

    </nav>
  )
}

export default Navbar