import About from "../sections/About"
import Footer from "../sections/Footer"
import Hero from "../sections/Hero"
import Local from "../sections/Local"
import Navbar from "../sections/Navbar"
import Time from "../sections/Time"


function Home() {

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Time />
      <Local />
      <Footer />

    </div>
  )
}

export default Home
