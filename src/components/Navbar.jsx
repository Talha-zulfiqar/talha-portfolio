import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Link } from "react-scroll"
import { FaDownload, FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa"

const navLinks = [
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Journey", to: "journey" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
]

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={scrolled ? "fixed top-0 z-50 w-full bg-black/55 shadow-2xl backdrop-blur-xl transition-all duration-300" : "fixed top-0 z-50 w-full bg-black/30 backdrop-blur-md transition-all duration-300"}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-20">
        <Link to="hero" smooth={true} duration={600} className="cursor-pointer text-2xl font-bold">
          <span className="animate-gradient bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">MT</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} smooth={true} offset={-80} duration={600} className="nav-underline nav-shimmer cursor-pointer text-sm font-medium text-slate-300 hover:text-white transition">
              {link.label}
            </Link>
          ))}
          <a href="/MUHAMMAD%20TALHA%20RESUME.pdf" download className="inline-flex items-center gap-2 rounded-full border border-purple-500/70 px-4 py-2 text-sm font-medium text-white hover:bg-purple-600 transition">
            <FaDownload className="text-xs" />
            Download CV
          </a>
          <button type="button" onClick={() => setDarkMode(!darkMode)} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:border-purple-500" aria-label="Toggle dark mode">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
        <div className="flex items-center gap-3 md:hidden">
          <button type="button" onClick={() => setDarkMode(!darkMode)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white" aria-label="Toggle dark mode">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white" aria-label="Toggle menu">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.25 }} className="border-t border-white/10 bg-black/80 px-6 py-5 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} smooth={true} offset={-80} duration={600} onClick={() => setMenuOpen(false)} className="cursor-pointer rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200">
                  {link.label}
                </Link>
              ))}
              <a href="/MUHAMMAD%20TALHA%20RESUME.pdf" download className="inline-flex items-center justify-center gap-2 rounded-2xl border border-purple-500/70 px-4 py-3 text-sm font-medium text-white">
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
