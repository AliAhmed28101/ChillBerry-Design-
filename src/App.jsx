import { BrowserRouter, Routes, Route } from "react-router-dom"


import Contactus from "./components/Contactus"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Herosection from "./components/Herosection"
import Navbar from "./components/Navbar"
import Ourflavors from "./components/Ourflavors"
import Ourstory from "./components/Ourstory"
import Social from "./components/Social"
import SpecialOffers from "./components/SpecialOffers"
import Testimonials from "./components/Testimonials"
import Errorpage from "../Pages/Errorpage"




const Home = () => (
  <>
    <Navbar />
    <Herosection />
    <Ourstory />
    <Ourflavors />
    <SpecialOffers />
    <Gallery />
    <Testimonials />
    <Contactus />
    <Social />
    <Footer />
  </>
)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
