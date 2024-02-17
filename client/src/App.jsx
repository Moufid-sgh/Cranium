import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Admin from './Admin';
import ErrorPage from './ErrorPage';
import ModelsList from './ModelsList';
import Preloader from "./component/Preloader";
import { SmoothScroll } from './component/Functions/SmoothScroll';

function App() {

    //---smooth scroll-----------------------//
    useEffect(() => {

      SmoothScroll()
  
    }, []);


  return (
    <>
      <Preloader />

        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/models" element={<ModelsList />} />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
    </>

  )
}

export default App
