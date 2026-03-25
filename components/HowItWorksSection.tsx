'use client'

import { motion } from 'framer-motion'

const steps = [
  'Choose your experience',
  'Customize your journey',
  'We handle everything',
  'You arrive and experience',
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white" style={{
      backgroundImage:
        'linear-gradient(to bottom, rgba(255,255,255,1), rgba(36,29,77,0.05))',
    }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <p className="text-greek-blue font-semibold tracking-widest uppercase text-sm">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
            From idea to experience
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((s, idx) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gold/30 bg-white/80 backdrop-blur-sm p-8"
            >
              <div className="flex items-center gap-4">
                <div
                  className="h-12 w-12 rounded-full text-white flex items-center justify-center text-sm font-semibold"
                  style={{
                    backgroundImage:
                      'linear-gradient(to bottom right, var(--greek-blue), var(--thai-red))',
                  }}
                >
                  {idx + 1}
                </div>
                <p className="text-lg font-semibold text-foreground">
                  {s}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

