'use client'

import { motion } from 'framer-motion'

const activities = [
  'Cultural immersion',
  'City exploration',
  'Nightlife access',
  'Food experiences',
]

export function ActivitiesSection() {
  return (
    <section id="activities" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <p className="text-thai-red font-semibold tracking-widest uppercase text-sm">
            Experiences / Activities
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
            Designed Around What You Want to Experience
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {activities.map((a, idx) => (
              <motion.div
                key={a}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-gold/30 bg-white/70 backdrop-blur-sm p-7"
              >
                <p className="text-greek-blue font-semibold">{a}</p>
              </motion.div>
            ))}
          </div>

          <div
            className="rounded-3xl border border-gold/30 p-8"
            style={{
              backgroundImage:
                'linear-gradient(to bottom right, rgba(13,71,161,0.18), rgba(206,17,38,0.18))',
            }}
          >
            <button
              type="button"
              className="mt-8 w-full inline-flex items-center justify-center rounded-full text-white px-6 py-3 text-sm font-semibold hover:shadow-lg transition-all"
              style={{
                background:
                  'linear-gradient(to right, #0D47A1, #CE1126)',
                color: '#ffffff',
              }}
            >
              Customize My Experience
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

