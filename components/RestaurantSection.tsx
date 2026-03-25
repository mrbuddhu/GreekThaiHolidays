'use client'

import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

type Slide = {
  src: string
  alt: string
}

export function RestaurantSection() {
  const [slides, setSlides] = useState<Slide[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  const activeSlide = slides[activeIndex] ?? slides[0]
  const nextSlide =
    slides.length > 1 ? slides[(activeIndex + 1) % slides.length] : undefined

  const slideLabels = useMemo(
    () => ['Restaurant image', 'Greek hospitality', 'Dining experience'],
    [],
  )

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        const res = await fetch('/corousal-images.json')
        if (!res.ok) throw new Error('Failed to load corousal manifest')
        const files: string[] = await res.json()
        if (cancelled) return

        const thailandSet = new Set(['2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg'])
        const filtered = (files ?? []).filter((f) => typeof f === 'string' && thailandSet.has(f))
        const source = filtered.length ? filtered : (files ?? [])

        const mapped: Slide[] = source
          .filter((f) => typeof f === 'string' && f.length > 0)
          .map((file, idx) => {
            const label = slideLabels[idx % slideLabels.length] ?? 'Slide'
            return {
              src: `/corousal/${file}`,
              alt: label,
            }
          })

        // If something goes wrong, at least show a relevant fallback.
        setSlides(mapped.length ? mapped : [{ src: '/hero-greece.jpg', alt: 'Restaurant image' }])
      } catch {
        setSlides([{ src: '/hero-greece.jpg', alt: 'Restaurant image' }])
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [slideLabels])

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
            <div className="p-4">
              {/* Mobile/portrait: show two stacked images */}
              <div className="md:hidden">
                <div className="flex flex-col gap-3">
                  <div className="w-full rounded-2xl overflow-hidden border border-gold/20 bg-white">
                    <img
                      src={activeSlide?.src}
                      alt={activeSlide?.alt ?? 'Restaurant image'}
                      className="w-full h-[240px] object-contain bg-white"
                    />
                  </div>
                  <div className="w-full rounded-2xl overflow-hidden border border-gold/20 bg-white">
                    <img
                      src={nextSlide?.src ?? activeSlide?.src}
                      alt={nextSlide?.alt ?? activeSlide?.alt ?? 'Restaurant image'}
                      className="w-full h-[240px] object-contain bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Desktop: show one full image */}
              <div className="hidden md:block">
                <div className="w-full rounded-2xl overflow-hidden border border-gold/20 bg-white">
                  <img
                    src={activeSlide?.src}
                    alt={activeSlide?.alt ?? 'Restaurant image'}
                    className="w-full h-[380px] object-contain bg-white"
                  />
                </div>
              </div>

              {/* Thumbnails */}
              <div className="mt-4">
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {slides.slice(0, 12).map((s, idx) => {
                    const isActive = idx === activeIndex
                    return (
                      <button
                        key={s.src}
                        type="button"
                        onClick={() => setActiveIndex(idx)}
                        className={`shrink-0 rounded-2xl overflow-hidden border transition-all ${
                          isActive
                            ? 'border-gold/70 ring-2 ring-gold/20'
                            : 'border-gold/20 hover:border-gold/40'
                        }`}
                        style={{ width: 92 }}
                        aria-label={`Select ${s.alt}`}
                      >
                        <img
                          src={s.src}
                          alt={s.alt}
                          className="h-[60px] w-full object-contain bg-white"
                        />
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

