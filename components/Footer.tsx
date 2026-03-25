'use client'

import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="text-white py-20 px-6 relative overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(to bottom right, var(--greek-blue), var(--thai-blue), var(--thai-red))',
      }}
    >
      {/* Background decorative elements */}
      <div
        className="absolute -right-20 -bottom-20 w-96 h-96 bg-gold rounded-full blur-3xl"
        style={{ opacity: 0.05 }}
      ></div>
      <div
        className="absolute -left-20 top-20 w-80 h-80 bg-white rounded-full blur-3xl"
        style={{ opacity: 0.05 }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/gtlogo.png"
                alt="Greek Thai Holidays logo"
                className="h-10 w-auto"
              />
              <h3 className="font-serif text-2xl font-semibold">Greek Thai Holidays</h3>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Curated experiences where Greek excellence meets Thai culture. Creating unforgettable memories.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h4 className="text-sm font-semibold text-gold uppercase tracking-wider">Explore</h4>
            {['Experiences', 'Packages', 'About', 'Blog'].map((link) => (
              <a key={link} href="#" className="block text-sm text-white/80 hover:text-gold transition-colors duration-300">
                {link}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h4 className="text-sm font-semibold text-gold uppercase tracking-wider">Company</h4>
            {['About Us', 'Contact', 'Careers', 'Press'].map((link) => (
              <a key={link} href="#" className="block text-sm text-white/80 hover:text-gold transition-colors duration-300">
                {link}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h4 className="text-sm font-semibold text-gold uppercase tracking-wider">Legal</h4>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map((link) => (
              <a key={link} href="#" className="block text-sm text-white/80 hover:text-gold transition-colors duration-300">
                {link}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gold/30 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-white/70">
            © {currentYear} Greek Thai Holidays. All rights reserved.
          </p>
          
          <div className="flex gap-8">
            {[
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/beachnamitha/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/profile.php?id=61582412548155',
              },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15 }}
                className="text-sm text-white/70 hover:text-gold transition-colors duration-300 font-medium"
              >
                {social.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
