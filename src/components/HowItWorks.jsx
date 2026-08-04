import { motion } from 'framer-motion'
import { Smartphone, MapPin, Car, CreditCard } from 'lucide-react'
import './HowItWorks.css'

const steps = [
  {
    Icon: Smartphone,
    num: '01',
    title: 'Download the App',
    desc: 'Install JK Taxi on Android or iOS. Sign up with your phone number and verify with OTP in seconds.',
  },
  {
    Icon: MapPin,
    num: '02',
    title: 'Set Your Location',
    desc: 'Enter pickup and drop-off. Choose from Car, Auto, or Bike. See fare before you confirm.',
  },
  {
    Icon: Car,
    num: '03',
    title: 'Driver On The Way',
    desc: 'We match you with the nearest driver. Track them live. Share your OTP to start the ride.',
  },
  {
    Icon: CreditCard,
    num: '04',
    title: 'Arrive & Pay',
    desc: 'Reach your destination safely. Pay by Cash, UPI, or Card. Rate your driver in seconds.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section section-alt">
      <div className="container">
        <motion.div
          className="hiw__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">How It Works</span>
          <h2 className="section-title">Book a ride in four steps</h2>
          <p className="section-sub">From app open to arrival — simple, fast, and clear.</p>
        </motion.div>

        <ol className="hiw__timeline">
          {steps.map((s, i) => (
            <motion.li
              key={s.num}
              className="hiw__step"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
            >
              <div className="hiw__num">{s.num}</div>
              <div className="hiw__icon"><s.Icon size={22} strokeWidth={2} /></div>
              <h3 className="hiw__title">{s.title}</h3>
              <p className="hiw__desc">{s.desc}</p>
            </motion.li>
          ))}
        </ol>

        <motion.div
          className="hiw__banner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="hiw__banner-content">
            <h3>Serving all of Tiruppur</h3>
            <p>Kumaran Road · Avinashi Road · Palladam Road · RS Puram · and everywhere in between</p>
            <a href="#download" className="btn btn-md hiw__banner-btn">Book Now</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
