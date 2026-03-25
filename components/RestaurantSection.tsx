'use client'

import { motion } from 'framer-motion'

export function RestaurantSection() {
  return (
    <section id="restaurant" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <p className="text-thai-red font-semibold tracking-widest uppercase text-sm">
            Restaurant
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
            A Taste of Greece in Bangkok
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div
            className="rounded-3xl border border-gold/30 p-8"
            style={{
              backgroundImage:
                'linear-gradient(to bottom right, rgba(13,71,161,0.10), rgba(206,17,38,0.10))',
            }}
          >
            <p className="text-foreground/70 leading-relaxed">
              Rallis & Buathong’s Greek Restaurant brings authentic Greek flavors
              into the heart of Thailand.
              <span className="block mt-3">
                Where culture, cuisine, and experience meet.
              </span>
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full text-white px-7 py-3 text-sm font-semibold hover:shadow-lg transition-all"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, var(--greek-blue), var(--thai-red))',
                }}
              >
                Reserve a Table
              </button>
              <button
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border-2 border-gold px-7 py-3 text-sm font-semibold text-gold hover:bg-gold/10 transition-colors"
              >
                Experience Greek Dining
              </button>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-gold/30 bg-white/70 backdrop-blur-sm">
            <div className="relative aspect-[4/3] w-full">
              <img
                src="/corousal/1.jpg"
                alt="Restaurant"
                className="absolute inset-0 h-full w-full object-cover"
                onError={(e) => {
                  const img = e.currentTarget
                  const attempt = Number(img.dataset.attempt ?? '0')
                  const candidates = [
                    '/corousal/1.jpg',
                    '/corousal/1.jpeg',
                    '/corousal/1.png',
                    '/corousal/1.webp',
                  ]
                  const next =
                    candidates[attempt + 1] ?? '/hero-greece.jpg'
                  img.dataset.attempt = String(attempt + 1)
                  img.src = next
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <div className="absolute left-6 bottom-6">
                <p className="text-gold font-semibold tracking-widest uppercase text-xs">
                  A Taste of Greece
                </p>
                <p className="mt-2 text-white text-3xl font-serif font-semibold">
                  Welcome to Thailand
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

