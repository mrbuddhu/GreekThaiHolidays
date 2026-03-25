'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    id: 1,
    title: 'Energy',
    emoji: '⚡',
    description: 'Experience the vibrant pulse of Bangkok.',
    fullDescription: 'Ancient temples, night markets, and the energy that never sleeps. Immerse yourself in the heartbeat of Thailand.',
    highlights: ['Bangkok City Tour', 'Temple Visits', 'Night Markets'],
    gradientFrom: '#0D47A1',
    gradientTo: '#241D4D',
  },
  {
    id: 2,
    title: 'Culture',
    emoji: '🏛️',
    description: 'Immerse yourself in Thai heritage.',
    fullDescription: 'Connect with locals, artisans, and spiritual journeys. Discover the soul of both Greece and Thailand.',
    highlights: ['Local Guides', 'Craft Workshops', 'Spiritual Retreats'],
    gradientFrom: '#CE1126',
    gradientTo: '#B91C1C',
    featured: true
  },
  {
    id: 3,
    title: 'Taste',
    emoji: '🍜',
    description: 'Journey through Thailand\'s flavors.',
    fullDescription: 'Exclusive dining and culinary experiences. Private cooking classes with master chefs.',
    highlights: ['Private Dining', 'Cooking Classes', 'Market Tours'],
    gradientFrom: '#D4AF37',
    gradientTo: '#CE1126'
  },
  {
    id: 4,
    title: 'After Dark',
    emoji: '🌙',
    description: 'Bangkok nights reimagined.',
    fullDescription: 'Rooftop bars, exclusive clubs, and unforgettable evenings under the stars.',
    highlights: ['VIP Access', 'Premium Venues', 'Private Experiences'],
    gradientFrom: '#241D4D',
    gradientTo: '#1F2937'
  },
  {
    id: 5,
    title: 'Escape',
    emoji: '🏝️',
    description: 'Island paradises & wellness retreats.',
    fullDescription: 'Serene beaches away from the hustle. Pure relaxation and rejuvenation.',
    highlights: ['Island Resorts', 'Wellness Programs', 'Beach Escapes'],
    gradientFrom: '#8B6F47',
    gradientTo: '#D4AF37'
  },
]

export function ExperiencesSection() {
  return (
    <section id="experiences" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <p className="text-greek-blue font-semibold tracking-widest uppercase text-sm">
            Five Journeys
          </p>
          <h2 className="text-5xl md:text-6xl font-serif leading-tight">
            Curated <span className="text-thai-red">Experiences</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
            Five unique journeys that blend Greek elegance with Thai mystique. Each crafted to move your soul.
          </p>
        </motion.div>

        {/* Featured card - Culture */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 rounded-3xl p-12 md:p-16 text-white overflow-hidden relative group cursor-pointer"
          style={{
            backgroundImage:
              'linear-gradient(to bottom right, #CE1126, #B91C1C)',
          }}
        >
          <div className="absolute -right-20 -top-20 w-60 h-60 bg-white/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
          <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-gold/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
          
          <div className="relative z-10 grid md:grid-cols-3 gap-12 items-center">
            <div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-8xl mb-6"
              >
                🏛️
              </motion.div>
              <h3 className="text-4xl md:text-5xl font-serif mb-4">Culture</h3>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">Immerse yourself in Thai heritage with locals, artisans, and spiritual journeys. The most deeply transformative experience.</p>
              <motion.button
                whileHover={{ x: 6 }}
                className="text-gold font-semibold flex items-center gap-2 hover:gap-4 transition-all"
              >
                Start This Journey → 
              </motion.button>
            </div>
            
            <div className="md:col-span-2 grid grid-cols-3 gap-4">
              {[
                { icon: '👥', label: 'Local Guides', desc: 'Expert storytellers' },
                { icon: '🎨', label: 'Craft Workshops', desc: 'Learn traditions' },
                { icon: '🕉️', label: 'Spiritual Retreats', desc: 'Inner peace' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/10 rounded-2xl p-6 text-center backdrop-blur-sm hover:bg-white/20 transition-all"
                >
                  <p className="text-3xl mb-2">{item.icon}</p>
                  <p className="font-semibold mb-1">{item.label}</p>
                  <p className="text-xs text-white/70">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Four other experiences */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.filter(exp => !exp.featured).map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}
              className="rounded-3xl p-8 text-white group cursor-pointer overflow-hidden relative"
              style={{
                backgroundImage: `linear-gradient(to bottom right, ${exp.gradientFrom}, ${exp.gradientTo})`,
              }}
            >
              {/* Background glow */}
              <div className="absolute -right-16 -top-16 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: idx * 0.2 }}
                  className="text-6xl mb-6"
                >
                  {exp.emoji}
                </motion.div>
                
                <h3 className="text-3xl font-serif mb-3">{exp.title}</h3>
                <p className="text-white/90 mb-6 flex-grow leading-relaxed">{exp.fullDescription}</p>
                
                <div className="space-y-2 pt-6 border-t border-white/20">
                  {exp.highlights.slice(0, 2).map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2 text-sm text-white/80"
                    >
                      <span className="w-1 h-1 bg-gold rounded-full"></span>
                      {highlight}
                    </motion.div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ x: 4 }}
                  className="mt-6 font-medium text-gold hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  Explore {exp.title} →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
