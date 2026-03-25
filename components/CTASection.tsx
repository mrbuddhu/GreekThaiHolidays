'use client'

import { motion } from 'framer-motion'

export function CTASection() {
  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-br from-white via-blue-50/20 to-red-50/20">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-thai-red font-semibold tracking-widest uppercase text-sm">
            FINAL CTA
          </p>
          <h2 className="text-5xl md:text-6xl font-serif text-foreground leading-tight">
            Not just a trip. <span className="text-greek-blue">A designed experience.</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Plan My Experience. Talk to Us.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          id="contact-form"
          className="space-y-4 max-w-xl mx-auto pt-8 bg-white border-2 border-gold/30 rounded-2xl p-10"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-6 py-3 bg-white border-2 border-gold/30 rounded-lg focus:border-greek-blue focus:outline-none transition-colors"
          />
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full px-6 py-3 bg-white border-2 border-gold/30 rounded-lg focus:border-greek-blue focus:outline-none transition-colors"
          />
          <textarea
            placeholder="Tell us about your dream journey..."
            rows={4}
            className="w-full px-6 py-3 bg-white border-2 border-gold/30 rounded-lg focus:border-greek-blue focus:outline-none transition-colors"
          />
          
          <a
            href="#contact-form"
            className="block text-sm font-semibold text-greek-blue hover:text-thai-red transition-colors"
          >
            Plan My Experience
          </a>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full text-white py-4 rounded-lg font-semibold hover:shadow-2xl transition-all text-lg"
            style={{
              backgroundImage:
                'linear-gradient(to right, var(--greek-blue), var(--thai-red))',
            }}
          >
            Talk to Us
          </motion.button>
        </motion.form>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm text-foreground/60 pt-4"
        >
          Or reach us directly: <span className="text-thai-red font-semibold">+1 (555) 123-4567</span> | <span className="text-greek-blue font-semibold">info@greekthai.com</span>
        </motion.p>
      </div>
    </section>
  )
}
