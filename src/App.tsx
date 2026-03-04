import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './sections/Hero'
import { SocialProof } from './sections/SocialProof'
import { Mission } from './sections/Mission'
import { Mirror } from './sections/Mirror'
import { About } from './sections/About'
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
        <SocialProof />
        <Mission />
        <Mirror />
        <About />
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
