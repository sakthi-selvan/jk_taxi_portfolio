import { motion } from 'framer-motion'
import { Users, IndianRupee } from 'lucide-react'
import miniCar from '../assets/mini_car.jpeg'
import carImage from '../assets/car_image.jpeg'
import suvErtica from '../assets/suv_ertica.png'
import './Fleet.css'

const vehicles = [
  {
    img: miniCar,
    name: 'Mini',
    type: 'Hatchback',
    seats: 4,
    base: 100,
    perKm: 20,
    examples: 'WagonR · Alto · Tiago',
    popular: false,
  },
  {
    img: carImage,
    name: 'Sedan',
    type: 'Sedan',
    seats: 4,
    base: 100,
    perKm: 20,
    examples: 'Dzire · Etios · Aura',
    popular: true,
  },
  {
    img: suvErtica,
    name: 'SUV',
    type: 'SUV / MUV',
    seats: 7,
    base: 150,
    perKm: 25,
    examples: 'Ertiga · Innova · Marazzo',
    popular: false,
  },
  {
    img: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    name: 'Auto',
    type: 'Auto Rickshaw',
    seats: 3,
    base: 80,
    perKm: 21,
    examples: 'Bajaj RE · Piaggio Ape',
    popular: false,
  },
  {
    img: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    name: 'Bike',
    type: 'Two-Wheeler',
    seats: 1,
    base: 23,
    perKm: 13,
    examples: 'Pulsar · Apache · Activa',
    popular: false,
  },
]

export default function Fleet() {
  return (
    <section id="fleet" className="section section-alt">
      <div className="container">
        <motion.div
          className="fleet__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">Our Fleet</span>
          <h2 className="section-title">Choose your perfect ride</h2>
          <p className="section-sub">
            Five vehicle types to match every need and budget in Tiruppur.
          </p>
        </motion.div>
      </div>

      <div className="fleet__track-wrap">
        <div className="fleet__track">
          {vehicles.map((v, i) => (
            <motion.article
              key={v.name}
              className={`fleet__card${v.popular ? ' fleet__card--pop' : ''}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              {v.popular && <span className="fleet__badge">Most Popular</span>}
              <div className="fleet__img-wrap">
                <img src={v.img} alt={v.name} loading="lazy" />
              </div>
              <div className="fleet__info">
                <div className="fleet__name-row">
                  <div>
                    <h3 className="fleet__name">{v.name}</h3>
                    <span className="fleet__type">{v.type}</span>
                  </div>
                  <div className="fleet__seats">
                    <Users size={13} /> {v.seats}
                  </div>
                </div>
                <div className="fleet__pricing">
                  <div className="fleet__price-item">
                    <IndianRupee size={13} />
                    <span className="fleet__price-val">{v.base}</span>
                    <span className="fleet__price-lbl">base</span>
                  </div>
                  <span className="fleet__price-sep">+</span>
                  <div className="fleet__price-item">
                    <IndianRupee size={13} />
                    <span className="fleet__price-val">{v.perKm}</span>
                    <span className="fleet__price-lbl">/km</span>
                  </div>
                </div>
                <p className="fleet__examples">{v.examples}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
