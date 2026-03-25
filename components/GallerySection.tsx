'use client'

import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

export function GallerySection() {
  type Slide = {
    src: string
    alt: string
    title: string
    tag: string
  }

  const labelCycle = useMemo(
    () => [
      { title: 'Ancient Temples', tag: 'Greece' },
      { title: 'Island Escapes', tag: 'Thailand' },
      { title: 'Cultural Heritage', tag: 'Fusion' },
      { title: 'Luxury Dining', tag: 'Experiences' },
      { title: 'Serene Temples', tag: 'Thailand' },
      { title: 'Coastal Paradise', tag: 'Exploration' },
    ],
    [],
  )

  const [slides, setSlides] = useState<Slide[]>([
    {
      src: '/hero-greece.jpg',
      alt: 'Greek heritage',
      title: 'Ancient Temples',
      tag: 'Greece',
    },
    {
      src: '/hero-thailand.jpg',
      alt: 'Thai temples',
      title: 'Island Escapes',
      tag: 'Thailand',
    },
  ])

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

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        const res = await fetch('/corousal-images.json')
        if (!res.ok) throw new Error('Failed to load corousal manifest')
        const files: string[] = await res.json()
        if (cancelled) return

        const mapped: Slide[] = (files ?? [])
          .filter((f) => typeof f === 'string' && f.length > 0)
          .map((file, idx) => {
            const label = labelCycle[idx % labelCycle.length]
            return {
              src: `/corousal/${encodeURIComponent(file)}`,
              alt: label.title,
              title: label.title,
              tag: label.tag,
            }
          })

        setSlides(mapped.length ? mapped : [])
      } catch {
        // Keep existing fallback slides.
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [labelCycle])

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
                  className="w-full h-[250px] object-contain bg-white"
                  onError={(e) => {
                    e.currentTarget.src = '/hero-thailand.jpg'
                  }}
                />
                <img
                  src={nextSlide?.src ?? activeSlide?.src}
                  alt={nextSlide?.alt ?? activeSlide?.alt ?? 'Gallery image'}
                  className="w-full h-[250px] object-contain bg-white"
                  onError={(e) => {
                    e.currentTarget.src = '/hero-thailand.jpg'
                  }}
                />
              </div>
            </div>

            {/* Desktop: show one large image */}
            <div className="hidden md:block">
              <img
                src={activeSlide?.src}
                alt={activeSlide?.alt ?? 'Gallery image'}
                className="w-full h-[420px] md:h-[520px] object-contain bg-white"
                onError={(e) => {
                  e.currentTarget.src = '/hero-thailand.jpg'
                }}
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
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
                        e.currentTarget.src = '/hero-thailand.jpg'
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
