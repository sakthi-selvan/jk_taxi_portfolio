import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuickBook from './components/QuickBook'
import Services from './components/Services'
import Fleet from './components/Fleet'
import HowItWorks from './components/HowItWorks'
import Safety from './components/Safety'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Download from './components/Download'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <QuickBook />
      <Services />
      <Fleet />
      <HowItWorks />
      <Safety />
      <Pricing />
      <Testimonials />
      <Download />
      <Footer />
    </div>
  )
}

export default App
