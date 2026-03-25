'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: 'Curated Excellence',
    description: 'Hand-picked destinations, resorts, and experiences vetted by our team.',
    icon: '✓',
  },
  {
    title: 'Greek Discipline',
    description: 'Precision planning, attention to detail, and impeccable organization.',
    icon: '◈',
  },
  {
    title: 'Thai Warmth',
    description: 'Authentic connections with local culture and genuine hospitality.',
    icon: '◆',
  },
  {
    title: '24/7 Support',
    description: 'Always available. Because your journey matters to us.',
    icon: '★',
  },
]

export function FeaturesSection() {
  const colorMap: Record<
    string,
    { rgb: [number, number, number]; cssVar?: string }
  > = {
    'greek-blue': { rgb: [13, 71, 161] },
    'thai-red': { rgb: [206, 17, 38] },
    gold: { rgb: [212, 175, 55] },
    'thai-blue': { rgb: [36, 29, 77] },
  }

  const colors = ['greek-blue', 'thai-red', 'gold', 'thai-blue']
  
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white via-blue-50/20 to-red-50/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-greek-blue font-semibold tracking-widest uppercase text-sm mb-4">Why Choose Us</p>
          <h2 className="text-5xl md:text-6xl font-serif leading-tight">
            The Perfect <span className="text-thai-red">Blend</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            // Color is decided by index, but we apply it with inline styles
            // so Tailwind always generates the necessary CSS.
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="border-2 rounded-2xl p-8 space-y-4 transition-all"
              style={{
                backgroundImage: (() => {
                  const c = colorMap[colors[idx]]
                  if (!c) return undefined
                  const [r, g, b] = c.rgb
                  return `linear-gradient(to bottom right, rgba(${r},${g},${b},0.10), rgba(${r},${g},${b},0.05))`
                })(),
                borderColor: (() => {
                  const c = colorMap[colors[idx]]
                  if (!c) return undefined
                  const [r, g, b] = c.rgb
                  return `rgba(${r},${g},${b},0.30)`
                })(),
              }}
            >
              <motion.div 
                className="text-5xl"
                style={{
                  color: (() => {
                    const c = colorMap[colors[idx]]
                    if (!c) return undefined
                    const [r, g, b] = c.rgb
                    return `rgb(${r},${g},${b})`
                  })(),
                }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
              >
                {feature.icon}
              </motion.div>
              <h3
                className="text-xl font-serif"
                style={{
                  color: (() => {
                    const c = colorMap[colors[idx]]
                    if (!c) return undefined
                    const [r, g, b] = c.rgb
                    return `rgb(${r},${g},${b})`
                  })(),
                }}
              >
                {feature.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
