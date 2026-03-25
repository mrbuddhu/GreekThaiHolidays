'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export function Header() {
  const navItems = ['Experiences', 'Journeys', 'Culture', 'Contact']
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-40 bg-white/95 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center"
        >
          <img
            src="/gtlogo.png"
            alt="Greek Thai Holidays logo"
            className="h-14 w-auto object-contain drop-shadow-[0_6px_18px_rgba(0,0,0,0.18)]"
          />
        </motion.div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm tracking-wide hover:text-thai-red transition-colors relative"
                style={{ color: 'var(--foreground)' }}
                whileHover={{ y: -2 }}
              >
                {item}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, var(--greek-blue), var(--thai-red))',
                  }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white px-7 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-lg hidden sm:inline-flex"
            style={{
              backgroundImage:
                'linear-gradient(to right, var(--greek-blue), var(--thai-red))',
            }}
          >
            Plan Journey
          </motion.button>

          {/* Mobile menu */}
          <div className="md:hidden relative">
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="h-10 w-10 rounded-full border border-gold/30 bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              style={{ color: 'var(--foreground)' }}
            >
              <span className="text-lg leading-none">≡</span>
            </button>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-3 w-56 rounded-2xl border border-gold/20 bg-white/95 backdrop-blur-md shadow-xl overflow-hidden"
                >
                  <div className="p-3 flex flex-col gap-2">
                    {navItems.map((item) => (
                      <motion.a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="px-3 py-2 rounded-xl text-sm hover:bg-gold/10 transition-colors"
                        style={{ color: 'var(--foreground)' }}
                        whileHover={{ y: -1 }}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item}
                      </motion.a>
                    ))}

                    <button
                      type="button"
                      onClick={() => setMenuOpen(false)}
                      className="mt-2 w-full rounded-xl px-3 py-2 text-sm font-semibold"
                      style={{
                        backgroundImage:
                          'linear-gradient(to right, var(--greek-blue), var(--thai-red))',
                        color: '#ffffff',
                      }}
                    >
                      Plan Journey
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  )
}
