import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import carImage from '../assets/car_image.jpeg'
import './Services.css'

const services = [
  {
    img: carImage,
    tag: 'Most Popular',
    title: 'Car Rides',
    desc: 'AC sedans, SUVs and premium cars for city travel, airport drops, and outstation trips.',
    features: ['One Way & Round Trip', 'Airport Pickup / Drop', 'Outstation Available'],
    startFrom: '₹100',
  },
  {
    img: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop',
    tag: 'Best Value',
    title: 'Auto Rickshaw',
    desc: 'Quick, affordable autos for short distances within Tiruppur city. No bargaining, fixed fares.',
    features: ['Fixed Metered Fare', 'No Bargaining', 'Short City Rides'],
    startFrom: '₹80',
  },
  {
    img: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop',
    tag: 'Fastest',
    title: 'Bike Taxi',
    desc: 'Beat traffic with two-wheeler rides. Perfect for solo commuters who need speed.',
    features: ['2-Min Pickup', 'Beat Traffic', 'Helmet Provided'],
    startFrom: '₹23',
  },
  {
    img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=900&h=600&q=80&auto=format&fit=crop',
    tag: 'Instant',
    title: 'Ping — Instant Ride',
    desc: 'One-tap booking. We match you with the nearest available vehicle in seconds. No waiting.',
    features: ['Nearest Driver', 'Any Vehicle Type', 'Real-Time Match'],
    startFrom: '₹23',
  },
]

export default function Services() {
  return (
    <section id="services" className="section section-white">
      <div className="container">
        <motion.div
          className="svc__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">Services</span>
          <h2 className="section-title">Every ride you need</h2>
          <p className="section-sub">
            Cars, autos, bikes, and instant ping rides — all in one app, only in Tiruppur.
          </p>
        </motion.div>

        <div className="svc__rows">
          {services.map((s, i) => (
            <motion.article
              className={`svc__row${i % 2 === 1 ? ' svc__row--flip' : ''}`}
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: 0.05, duration: 0.5 }}
            >
              <div className="svc__media">
                <img src={s.img} alt={s.title} loading="lazy" />
              </div>
              <div className="svc__copy">
                <span className="svc__eyebrow">{s.tag}</span>
                <h3 className="svc__title">{s.title}</h3>
                <p className="svc__desc">{s.desc}</p>
                <ul className="svc__features">
                  {s.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className="svc__foot">
                  <span className="svc__from">From {s.startFrom}</span>
                  <a href="#download" className="svc__link">
                    Book now <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
