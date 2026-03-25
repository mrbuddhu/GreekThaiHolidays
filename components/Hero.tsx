'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-screen w-full pt-20 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-red-50">
      {/* Decorative elements */}
      <div
        className="absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl"
        style={{
          backgroundImage:
            'linear-gradient(to bottom right, rgba(13,71,161,0.10), rgba(206,17,38,0.10))',
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
        style={{
          backgroundImage:
            'linear-gradient(to top right, rgba(36,29,77,0.10), rgba(212,175,55,0.05))',
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-20">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-thai-red font-semibold tracking-widest uppercase text-sm">Discover Ancient Cultures</p>
            <h1 className="text-5xl md:text-7xl leading-tight mt-4">
              <span className="text-greek-blue">Where Greece</span>{' '}
              <br />
              <span className="text-thai-red">Meets Thailand</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-foreground/70 max-w-md leading-relaxed"
          >
            Experience two legendary cultures united in one extraordinary journey. From ancient temples to island paradises, every moment crafted for the discerning traveler.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 pt-4"
          >
            <button
              className="text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #0D47A1, #CE1126)',
              }}
            >
              Begin Your Journey
            </button>
            <button className="border-2 border-gold text-gold px-8 py-4 rounded-full font-semibold hover:bg-gold/10 transition-all">
              Explore Galleries
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex gap-8 pt-8"
          >
            {[
              { number: '50+', label: 'Curated Experiences' },
              { number: '95%', label: 'Client Satisfaction' },
              { number: '20 yrs', label: 'Expertise' }
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-3xl font-bold text-greek-blue">{stat.number}</p>
                <p className="text-sm text-foreground/60">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right image gallery */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[600px] hidden md:block"
        >
          {/* Greece image - top right */}
          <motion.div
            whileHover={{ y: -10 }}
            className="absolute top-0 right-0 w-72 h-72 rounded-2xl shadow-2xl overflow-hidden border-4 border-gold"
          >
            <img 
              src="/hero-greece.jpg" 
              alt="Greek heritage" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
            <div
              className="absolute inset-0 flex items-end p-6 text-white"
              style={{
                backgroundImage:
                  'linear-gradient(to bottom, rgba(13,71,161,0), rgba(13,71,161,0.40))',
              }}
            >
              <div>
                <p className="font-serif text-2xl font-semibold">Greek Heritage</p>
              </div>
            </div>
          </motion.div>
          
          {/* Thailand image - bottom left */}
          <motion.div
            whileHover={{ y: 10 }}
            className="absolute bottom-0 left-0 w-72 h-72 rounded-2xl shadow-2xl overflow-hidden border-4 border-gold"
          >
            <img 
              src="/hero-thailand.jpg" 
              alt="Thai temples" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
            <div
              className="absolute inset-0 flex items-end p-6 text-white"
              style={{
                backgroundImage:
                  'linear-gradient(to top, rgba(206,17,38,0.40), rgba(206,17,38,0))',
              }}
            >
              <div>
                <p className="font-serif text-2xl font-semibold">Thai Mystique</p>
              </div>
            </div>
          </motion.div>

          {/* Center accent circle */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full shadow-2xl flex items-center justify-center text-white border-4 border-white"
            style={{
              backgroundImage:
                'linear-gradient(to bottom right, #d4af37, #f59e0b)',
            }}
          >
            <div className="text-center space-y-2">
              <p className="text-5xl">✨</p>
              <p className="font-serif text-xl font-semibold">Unforgettable</p>
              <p className="text-xs">Moments</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
      >
        <div className="flex items-center justify-center gap-3">
          <div className="w-6 h-10 border-2 border-greek-blue rounded-full flex justify-center p-2">
            <motion.div className="w-1 h-2 bg-greek-blue rounded-full" />
          </div>
          <p className="text-sm text-foreground/60 font-semibold">Scroll to explore</p>
        </div>
      </motion.div>
    </section>
  )
}
