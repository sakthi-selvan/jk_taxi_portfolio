import { motion } from 'framer-motion'
import { Shield, Phone, Lock, MapPin, UserCheck, AlertCircle } from 'lucide-react'
import './Safety.css'

const features = [
  { icon: <Lock size={20} />, title: 'Ride OTP Verification', desc: '4-digit OTP per ride. Driver must verify before starting. Prevents unauthorised trips.' },
  { icon: <Phone size={20} />, title: 'Emergency SOS Button', desc: 'One tap during any active ride. Instantly alerts your emergency contact and local authorities.' },
  { icon: <UserCheck size={20} />, title: 'Background-Verified Drivers', desc: 'Every driver is police-verified, licensed, and trained before joining JK Taxi.' },
  { icon: <MapPin size={20} />, title: 'Live Ride Sharing', desc: 'Share your live trip location with family. They see your ride in real time until you arrive.' },
  { icon: <AlertCircle size={20} />, title: 'Trip Insurance', desc: 'Every ride is insured from pickup to drop. You are covered, always.' },
  { icon: <Shield size={20} />, title: '24 / 7 Customer Support', desc: 'Call or chat any time of the day. Our support team responds within minutes.' },
]

export default function Safety() {
  return (
    <section id="safety" className="section section-white">
      <div className="container">
        <div className="safety__layout">
          <motion.div
            className="safety__image-col"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="safety__img-wrap">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=700&q=75&auto=format&fit=crop"
                alt="Safe ride"
                loading="lazy"
              />
            </div>
          </motion.div>

          <div className="safety__content-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-tag"><Shield size={13} /> Safety First</span>
              <h2 className="section-title">Your safety is our priority</h2>
              <p className="section-sub" style={{ marginBottom: '28px' }}>
                Multiple layers of protection so every ride in Tiruppur is safe, reliable, and worry-free.
              </p>
            </motion.div>

            <div className="safety__grid">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  className="safety__item"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <div className="safety__icon">{f.icon}</div>
                  <div>
                    <h4 className="safety__item-title">{f.title}</h4>
                    <p className="safety__item-desc">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
