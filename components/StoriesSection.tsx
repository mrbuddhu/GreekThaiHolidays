'use client'

import { motion } from 'framer-motion'

const stories = [
  { key: 'Energy', text: 'Bangkok, always moving. Always alive.' },
  { key: 'Culture', text: 'Timeless temples. Deeper meaning.' },
  { key: 'Taste', text: 'Every flavor tells a story.' },
  { key: 'After Dark', text: 'When Thailand truly comes alive.' },
  { key: 'Escape', text: 'Silence. Space. Reset.' },
]

export function StoriesSection() {
  return (
    <section id="stories" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <p className="text-thai-red font-semibold tracking-widest uppercase text-sm">
            Story (Scroll Texts)
          </p>
          <h2 className="text-5xl md:text-6xl font-serif text-foreground">
            Five Journeys, <span className="text-greek-blue">One Soul</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {stories.map((s, idx) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gold/30 bg-white/70 backdrop-blur-sm p-8"
            >
              <p className="text-greek-blue font-semibold tracking-widest uppercase text-sm">
                {s.key}
              </p>
              <p className="mt-3 text-lg text-foreground/80 leading-relaxed">
                {s.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
