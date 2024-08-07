import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Section1 from './components/section1/Section1.jsx'
import Navbar from './components/navbar/navbar.jsx'
import Footer from './components/footer.jsx'
import Contact from './pages/contact.jsx'
import Doctor from './components/doctor/Doctor.jsx'
import About from './components/about/About.jsx'
function App() {

  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Section1 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path = "/about" element = {<About />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App
