import { useState } from 'react'
import { motion } from 'framer-motion'
import { Car, Bus, Bike, Zap } from 'lucide-react'
import './QuickBook.css'

const VEHS = [
  { id: 'car', Icon: Car, label: 'Car', sub: 'Mini · Sedan · SUV', price: '₹100 / 3 km · then ₹20/km' },
  { id: 'auto', Icon: Bus, label: 'Auto', sub: 'Auto Rickshaw', price: '₹80 / 3 km · then ₹20/km' },
  { id: 'bike', Icon: Bike, sub: 'Two-Wheeler Taxi', label: 'Bike', price: '₹23 / 3 km · then ₹13/km' },
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

        </motion.div>
      </div>
    </section>
  )
}
