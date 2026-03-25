'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

const packages = [
  {
    title: 'Bangkok → Chiang Mai → Phuket',
    subtitle: 'The Complete Thailand Circuit',
    description: 'City energy. Mountains. Islands. One seamless journey.',
    imageIndex: 1,
  },
  {
    title: 'Bangkok + Pattaya',
    subtitle: 'City Meets Coast',
    description: 'Fast-paced Bangkok with curated beachside escape.',
    imageIndex: 2,
  },
  {
    title: 'Phuket + Krabi',
    subtitle: 'Island Dual Experience',
    description: 'Cliffs, beaches, and cinematic landscapes.',
    imageIndex: 3,
  },
  {
    title: 'Island Experiences',
    subtitle: 'Slow Travel, Deep Escape',
    description: 'Disconnect. Reset. Experience Thailand differently.',
    imageIndex: 4,
  },
  {
    title: 'Forest Retreat',
    subtitle: 'Silence. Nature. Clarity.',
    description: 'A complete mental and physical reset.',
    imageIndex: 5,
  },
  {
    title: 'Nightlife Experience',
    subtitle: 'After Dark Thailand',
    description: 'Curated access to the best nightlife scenes.',
    imageIndex: 6,
  },
]

export function PackagesSection() {
  const scrollerRef = useRef<HTMLDivElement | null>(null)

  const scrollByCard = (dir: -1 | 1) => {
    const el = scrollerRef.current
    if (!el) return
    const firstCard = el.querySelector<HTMLElement>('[data-pack-card="true"]')
    const cardWidth = firstCard?.getBoundingClientRect().width
    if (!cardWidth) return
    el.scrollBy({ left: dir * cardWidth, behavior: 'smooth' })
  }

  return (
    <section id="packages" className="py-24 px-6 bg-gradient-to-b from-white to-blue-50/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <p className="text-greek-blue font-semibold tracking-widest uppercase text-sm">
            Packages
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
            Curated Routes, Crafted Journeys
          </h2>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto pb-3 snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {packages.map((p, idx) => (
              <motion.div
                key={p.title}
                data-pack-card="true"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="snap-start rounded-2xl border border-gold/30 bg-white/80 backdrop-blur-sm p-8 hover:border-gold/70 transition-colors w-[92%] sm:w-[85%] lg:w-[calc((100%-48px)/3)]"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl border border-gold/20">
                  <img
                    src={`/corousal/${p.imageIndex}.jpg`}
                    alt={p.title}
                    className="h-40 w-full object-contain bg-white"
                    onError={(e) => {
                      const img = e.currentTarget
                      const attempt = Number(img.dataset.attempt ?? '0')
                      const fallback =
                        p.imageIndex === 1 ? '/hero-greece.jpg' : '/hero-thailand.jpg'
                      const candidates = [
                        `/corousal/${p.imageIndex}.jpg`,
                        `/corousal/${p.imageIndex}.jpeg`,
                        `/corousal/${p.imageIndex}.png`,
                        `/corousal/${p.imageIndex}.webp`,
                      ]
                      const next =
                        candidates[attempt + 1] ?? fallback
                      img.dataset.attempt = String(attempt + 1)
                      img.src = next
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute left-4 bottom-3">
                    <p className="text-gold font-semibold tracking-widest uppercase text-xs">
                      {p.subtitle}
                    </p>
                  </div>
                </div>

                <h3 className="mt-3 text-xl md:text-2xl font-serif font-semibold text-greek-blue">
                  {p.title}
                </h3>
                <p className="mt-3 text-foreground/70 leading-relaxed">
                  {p.description}
                </p>

                <button
                  type="button"
                  className="mt-8 w-full inline-flex items-center justify-center rounded-full border-2 border-gold px-6 py-2.5 text-sm font-semibold text-gold hover:bg-gold/10 transition-colors"
                >
                  Explore This Experience →
                </button>
              </motion.div>
            ))}
          </div>

          {/* Desktop arrows */}
          <div className="hidden lg:flex absolute -top-14 right-0 gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              className="h-10 w-10 rounded-full border border-gold/30 bg-white/80 backdrop-blur-md text-greek-blue hover:border-gold/70 transition-colors flex items-center justify-center"
              aria-label="Previous packages"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              className="h-10 w-10 rounded-full border border-gold/30 bg-white/80 backdrop-blur-md text-greek-blue hover:border-gold/70 transition-colors flex items-center justify-center"
              aria-label="Next packages"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

