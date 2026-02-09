import Contactus from "./components/Contactus"
import Footer from "./components/Footer"
import Herosection from "./components/Herosection"
import Navbar from "./components/Navbar"
import Ourflavors from "./components/Ourflavors"
import Ourstory from "./components/Ourstory"
import SpecialOffers from "./components/SpecialOffers"
import Testimonials from "./components/Testimonials"

function App() {

  return (
    <>
      <Navbar />
      <Herosection />

      <Ourstory />

        <Ourflavors />

        <SpecialOffers />

        <Testimonials/>

        <Contactus />

        <Footer />
        
    </>
  )
}

export default App
