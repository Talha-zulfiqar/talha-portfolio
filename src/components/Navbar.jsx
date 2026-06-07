import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaDownload, FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa'

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Journey', to: 'journey' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('talha-theme') || 'dark'
    setTheme(storedTheme)
    document.documentElement.dataset.theme = storedTheme

    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('talha-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-black/55 shadow-2xl shadow-black/40 backdrop-blur-xl' : 'bg-black/30 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-20">
        <Link to="hero" smooth duration={600} className="group flex items-center gap-2 font-['Space_Grotesk'] text-2xl font-bold">
          <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">MT</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              offset={-80}
              duration={600}
              className="cursor-pointer text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/MUHAMMAD%20TALHA%20RESUME.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-purple-500/70 px-4 py-2 text-sm font-medium text-white transition hover:bg-purple-600"
          >
            <FaDownload className="text-xs" />
            Download CV
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-purple-500 hover:text-purple-300"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-black/80 px-6 py-5 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  offset={-80}
                  duration={600}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="/MUHAMMAD%20TALHA%20RESUME.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-purple-500/70 px-4 py-3 text-sm font-medium text-white"
              >
                <FaDownload className="text-xs" />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar