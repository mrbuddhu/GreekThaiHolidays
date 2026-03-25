'use client'

import { motion } from 'framer-motion'

const audience = [
  'Solo travelers',
  'Couples',
  'Families',
  'Private groups',
]

export function AudienceSection() {
  return (
    <section id="audience" className="py-24 px-6 bg-gradient-to-b from-white to-red-50/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <p className="text-greek-blue font-semibold tracking-widest uppercase text-sm">
            Audience
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
            Who This Is For
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Every journey is tailored. No fixed templates.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audience.map((a, idx) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gold/30 bg-white/80 backdrop-blur-sm p-8 hover:border-gold/70 transition-colors"
            >
              <p className="text-greek-blue font-semibold text-lg">{a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

