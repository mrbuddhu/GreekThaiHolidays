'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export function GallerySection() {
  type Slide = {
    src: string
    alt: string
    title: string
    tag?: string
  }

  // Exactly 5 CDN-style images (stored in `public/after-hero/` for reliable serving).
  const slides: Slide[] = [
    { src: '/after-hero/1.png', alt: 'Thailand island view', title: 'Slide 1', tag: 'Thailand' },
    { src: '/after-hero/2.png', alt: 'Thailand temples view', title: 'Slide 2', tag: 'Thailand' },
    { src: '/after-hero/3.png', alt: 'Thailand beach sunset', title: 'Slide 3', tag: 'Thailand' },
    { src: '/after-hero/4.png', alt: 'Tropical sea landscape', title: 'Slide 4', tag: 'Thailand' },
    { src: '/after-hero/5.png', alt: 'Beach and boat view', title: 'Slide 5', tag: 'Thailand' },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const activeSlide = slides[activeIndex] ?? slides[0]
  const nextSlide =
    slides.length > 1
      ? slides[(activeIndex + 1) % slides.length]
      : undefined

  const goPrev = () =>
    setActiveIndex((i) => {
      const len = slides.length
      if (!len) return 0
      return (i - 1 + len) % len
    })

  const goNext = () =>
    setActiveIndex((i) => {
      const len = slides.length
      if (!len) return 0
      return (i + 1) % len
    })

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center space-y-4"
        >
          <p className="text-thai-red font-semibold tracking-widest uppercase text-sm">Visual Journey</p>
          <h2 className="text-5xl md:text-6xl font-serif">
            Moments That <span className="text-greek-blue">Inspire</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Explore our collection of extraordinary destinations and unforgettable experiences
          </p>
        </motion.div>

        {/* Main carousel */}
        <div className="mt-10">
          <motion.div
            key={activeSlide?.src}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="relative overflow-hidden rounded-3xl border border-gold/30"
          >
            {/* Portrait/mobile: show two images stacked */}
            <div className="md:hidden">
              <div className="flex flex-col">
                <img
                  src={activeSlide?.src}
                  alt={activeSlide?.alt ?? 'Gallery image'}
                  className="w-full h-[28vh] min-h-[220px] object-contain bg-white"
                  onError={(e) => {
                    e.currentTarget.src = slides[0]?.src
                  }}
                />
                <img
                  src={nextSlide?.src ?? activeSlide?.src}
                  alt={nextSlide?.alt ?? activeSlide?.alt ?? 'Gallery image'}
                  className="w-full h-[28vh] min-h-[220px] object-contain bg-white"
                  onError={(e) => {
                    e.currentTarget.src = slides[0]?.src
                  }}
                />
              </div>
            </div>

            {/* Desktop: show one large image */}
            <div className="hidden md:block">
              <img
                src={activeSlide?.src}
                alt={activeSlide?.alt ?? 'Gallery image'}
                className="w-full h-[55vh] md:h-[520px] min-h-[420px] max-h-[620px] object-contain bg-white"
                onError={(e) => {
                  e.currentTarget.src = slides[0]?.src
                }}
              />
            </div>
          </motion.div>

          {/* Thumbnail strip */}
          <div className="mt-5">
            <div className="flex gap-3 overflow-x-auto pb-2">
              {slides.map((s, idx) => {
                const isActive = idx === activeIndex
                return (
                  <button
                    key={s.src}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`relative shrink-0 rounded-2xl overflow-hidden border transition-all ${
                      isActive ? 'border-gold/70 ring-2 ring-gold/20' : 'border-gold/20 hover:border-gold/40'
                    }`}
                    style={{ width: 180 }}
                    aria-label={`Select ${s.title}`}
                  >
                    <img
                      src={s.src}
                      alt={s.alt}
                      className="h-20 md:h-24 w-full object-contain bg-white"
                      onError={(e) => {
                        e.currentTarget.src = slides[0]?.src
                      }}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                      style={{ opacity: isActive ? 0.15 : 0.35 }}
                    />
                  </button>
                )
              })}
            </div>

            {/* Mobile nav buttons */}
            <div className="mt-4 flex justify-center gap-3 sm:hidden">
              <button
                type="button"
                onClick={goPrev}
                className="h-10 w-10 rounded-full bg-gradient-to-r from-greek-blue to-thai-red text-white flex items-center justify-center hover:shadow-lg transition-all"
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                type="button"
                onClick={goNext}
                className="h-10 w-10 rounded-full bg-gradient-to-r from-greek-blue to-thai-red text-white flex items-center justify-center hover:shadow-lg transition-all"
                aria-label="Next image"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
