import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Admin from './Admin';
import ModelsList from './ModelsList';
import ScrollTop from './component/Functions/ScrollTop';


function App() {


  return (
      <BrowserRouter>
        <ScrollTop />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/models" element={<ModelsList />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
