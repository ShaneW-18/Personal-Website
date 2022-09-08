
import Navbar from './Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Experience from './Pages/Experience';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
