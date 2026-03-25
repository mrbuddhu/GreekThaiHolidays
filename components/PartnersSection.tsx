'use client'

import { motion } from 'framer-motion'

export function PartnersSection() {
  const partners = [
    { name: 'Hayati Asia', logoSrc: '/partner-1.png' },
    { name: 'Amazing Thailand', logoSrc: '/partner-2.png' },
    { name: 'Rallis Group', logoSrc: '/partner-3.png' },
  ] as const

  return (
    <section id="partners" className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="space-y-2">
            <p className="text-greek-blue font-semibold tracking-widest uppercase text-sm">
              Partners
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-greek-blue">
              Our Network
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Backed by experience. Built on partnerships.
            </p>
          </div>

          <div className="mx-auto w-full max-w-5xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
              {partners.map((p) => (
                <div
                  key={p.name}
                  className="w-full flex flex-col items-center gap-3"
                >
                  <div className="h-18 w-full flex items-center justify-center">
                    <img
                      src={p.logoSrc}
                      alt={p.name}
                      className="h-16 w-auto object-contain drop-shadow-[0_6px_18px_rgba(0,0,0,0.10)]"
                    />
                  </div>
                  <p className="text-sm font-semibold text-foreground/70">
                    {p.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

