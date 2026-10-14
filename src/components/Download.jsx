import { motion } from 'framer-motion'
import { Check, Smartphone } from 'lucide-react'
import appView from '../assets/app_view.png'
import './Download.css'

export default function Download() {
  return (
    <section id="download" className="section section-white">
      <div className="container">
        <div className="dl__wrapper">
          {/* BG image */}
          <div className="dl__bg">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=75&auto=format&fit=crop"
              alt="App download"
              loading="lazy"
            />
            <div className="dl__bg-overlay" />
          </div>

          <div className="dl__inner">
            {/* Left */}
            <motion.div
              className="dl__text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-tag" style={{ background: 'transparent', color: 'var(--amber)', border: 'none' }}>
                <Smartphone size={13} /> Get the App
              </span>
              <h2 className="dl__title">
                Download JK Taxi.<br />
                <span>Ride Today.</span>
              </h2>
              <p className="dl__desc">
                Available on Android and iOS. Book your first ride in under 30 seconds. No credit card needed.
              </p>

              <ul className="dl__perks">
                {['Free to download', 'No subscription fee', 'OTP protected', 'Track rides live', '24/7 availability'].map((p, i) => (
                  <li key={i}><Check size={14} />{p}</li>
                ))}
              </ul>

              <div className="dl__store-row">
                <a href="#" className="dl__store-btn">
                  <svg viewBox="0 0 24 24" className="dl__store-icon" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div>
                    <span>Download on the</span>
                    <strong>App Store</strong>
                  </div>
                </a>

                <a href="https://play.google.com/apps/testing/com.jktaxi.customer" className="dl__store-btn" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" className="dl__store-icon" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                  </svg>
                  <div>
                    <span>Get it on</span>
                    <strong>Google Play</strong>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Right – phone */}
            <motion.div
              className="dl__phone-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="dl__phone">
                <img src={appView} alt="JK Taxi app on a phone, showing the ride map and vehicle booking options" className="dl__app-view" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
