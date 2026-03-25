'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Check localStorage first, then system preference
    const stored = localStorage.getItem('theme')
    const isDarkMode = stored 
      ? stored === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(isDarkMode)
    
    // Apply theme to DOM
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)

    if (newDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  if (!isMounted) return null

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-accent/10 hover:bg-accent/20 text-accent transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.5 1.5a1 1 0 11-2 0 1 1 0 012 0zm3.866 1.634a1 1 0 10-1.732-1 1 1 0 001.732 1zm2.828 2.828a1 1 0 11-1.414-1.414 1 1 0 011.414 1.414zm1 3.866a1 1 0 11-2 0 1 1 0 012 0zM17 11.5a1 1 0 100-2 1 1 0 000 2zm-1.634 3.866a1 1 0 111.732-1 1 1 0 01-1.732 1zm-2.828 2.828a1 1 0 111.414-1.414 1 1 0 01-1.414 1.414zm-1 3.866a1 1 0 112 0 1 1 0 01-2 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" clipRule="evenodd" />
        </svg>
      )}
    </motion.button>
  )
}
