import React from 'react';
import { Link } from 'react-router-dom';



function Navbar() {


  return (
    <nav className="flex items-center justify-between h-20">
      <h1 className="tracking-wide text-2xl font-bold">Cranium</h1>

      <div className="flex space-x-8">
        <Link to="/models">
          <button>
            Models
            <span className="first"></span>
            <span className="second"></span>
            <span className="third"></span>
            <span className="fourth"></span>
          </button>
        </Link>

        <button>
          Contact
          <span className="first"></span>
          <span className="second"></span>
          <span className="third"></span>
          <span className="fourth"></span>
        </button>
      </div>

    </nav>
  )
}

export default Navbar