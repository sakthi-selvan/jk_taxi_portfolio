import { useState } from 'react'
import { motion } from 'framer-motion'
import { Car, Bus, Bike, Zap, ArrowRight } from 'lucide-react'
import './QuickBook.css'

const VEHS = [
  { id: 'car', Icon: Car, label: 'Car', sub: 'Mini · Sedan · SUV', price: 'From ₹100' },
  { id: 'auto', Icon: Bus, label: 'Auto', sub: 'Auto Rickshaw', price: 'From ₹80' },
  { id: 'bike', Icon: Bike, label: 'Bike', sub: 'Two-Wheeler Taxi', price: 'From ₹23' },
  { id: 'ping', Icon: Zap, label: 'Ping', sub: 'Nearest Available', price: 'Instant' },
]

export default function QuickBook() {
  const [tab, setTab] = useState('car')

  return (
    <section id="quick-book" className="qb">
      <div className="container">
        <motion.div
          className="qb-panel"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="qb-head">
            <h2 className="qb-title">Pick a ride type</h2>
            <p className="qb-sub">Transparent starting fares — confirm in the app.</p>
          </div>

          <div className="qb-tabs" role="tablist">
            {VEHS.map(({ id, Icon, label, sub, price }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={tab === id}
                className={`qb-tab${tab === id ? ' qb-tab-active' : ''}`}
                onClick={() => setTab(id)}
              >
                <Icon size={22} strokeWidth={1.8} />
                <span className="qb-tab-label">{label}</span>
                <span className="qb-tab-sub">{sub}</span>
                <span className="qb-tab-price">{price}</span>
              </button>
            ))}
          </div>

          <div className="qb-route">
            <div className="qb-field">
              <span className="qb-dot qb-dot--go" />
              <div>
                <label>Pickup</label>
                <span>Your current location, Tiruppur</span>
              </div>
            </div>
            <div className="qb-field">
              <span className="qb-dot qb-dot--drop" />
              <div>
                <label>Drop-off</label>
                <span className="qb-placeholder">Where are you going?</span>
              </div>
            </div>
            <a href="#download" className="qb-cta">
              Find a Ride
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
