import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './sections/Hero'
import { ConfusionToClarity } from './sections/ConfusionToClarity'
import { About } from './sections/About'
import { Mission } from './sections/Mission'
import { RebirthProcess } from './sections/RebirthProcess'
import { WhatsInside } from './sections/WhatsInside'
import { Imagine } from './sections/Imagine'
import { WhoItsFor } from './sections/WhoItsFor'
import { ApplicationProcess } from './sections/ApplicationProcess'
import { Testimonials } from './sections/Testimonials'
import { FAQ } from './sections/FAQ'
import { FinalCTA } from './sections/FinalCTA'

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ConfusionToClarity />
        <About />
        <Mission />
        <RebirthProcess />
        <WhatsInside />
        <Imagine />
        <WhoItsFor />
        <ApplicationProcess />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
