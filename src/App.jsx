import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Timeline from "./components/Timeline"
import DevLinkCaseStudy from "./components/DevLinkCaseStudy"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [showBackToTop, setShowBackToTop] = useState(false)

  const { scrollYProgress } = useScroll()
  const progressScaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute("data-theme", darkMode ? "dark" : "light")
    if (darkMode) {
      root.classList.add("dark")
      root.classList.remove("light")
    } else {
      root.classList.add("light")
      root.classList.remove("dark")
    }
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 600)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={darkMode ? "bg-[#0a0a0f] text-white font-sans min-h-screen transition-colors duration-300" : "bg-gray-50 text-gray-900 font-sans min-h-screen transition-colors duration-300"}>
      <motion.div
        style={{ scaleX: progressScaleX }}
        className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-purple-500 via-amber-300 to-cyan-400"
      />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <DevLinkCaseStudy />
        <Projects />
        <Contact />
      </main>
      <Footer />
      {showBackToTop && (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 rounded-full bg-purple-600 p-4 text-white shadow-2xl transition hover:-translate-y-1 hover:bg-purple-500"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 14l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default App
