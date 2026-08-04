import { motion } from 'framer-motion'
import { ArrowRight, Phone, ChevronDown } from 'lucide-react'
import './Hero.css'
import heroVideo from '../assets/hero_section_background.mp4'

export default function Hero() {
  return (
    <section className="hr">
      <div className="hr-bg" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hr-bg-video"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hr-bg-overlay" />
      </div>

      <div className="hr-body">
        <motion.p
          className="hr-brand"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          JK Taxi
        </motion.p>

        <motion.h1
          className="hr-headline"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          Your city.<br />Your ride.
        </motion.h1>

        <motion.p
          className="hr-subtext"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          Cars, autos and bikes across Tiruppur — clear fares, verified drivers, available day and night.
        </motion.p>

        <motion.div
          className="hr-ctas"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.45 }}
        >
          <a href="#download" className="hr-cta-main">
            Download App &amp; Book
            <ArrowRight size={17} strokeWidth={2.5} />
          </a>
          <a href="tel:+9104214433435" className="hr-cta-call">
            <Phone size={15} strokeWidth={2.5} />
            Call 0421 4433435
          </a>
        </motion.div>

        <motion.a
          href="#quick-book"
          className="hr-soft-link"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.42 }}
        >
          See fares &amp; vehicle types
          <ArrowRight size={14} />
        </motion.a>
      </div>

      <motion.a
        href="#services"
        className="hr-scroll"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <ChevronDown size={22} />
      </motion.a>
    </section>
  )
}
