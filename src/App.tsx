import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './sections/Hero'
import { Manifesto } from './sections/Manifesto'
import { About } from './sections/About'
import { WhoItsFor } from './sections/WhoItsFor'
import { Journey } from './sections/Journey'
import { Testimonials } from './sections/Testimonials'
import { FAQ } from './sections/FAQ'
import { FinalCTA } from './sections/FinalCTA'

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Manifesto />
        <About />
        <WhoItsFor />
        <Journey />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
