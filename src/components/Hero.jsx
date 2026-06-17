import { useRef } from 'react'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaChevronDown, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-scroll'

const particles = [
  { left: '12%', top: '22%', size: 6, depth: 26, delay: '0s', dur: '7s' },
  { left: '82%', top: '18%', size: 4, depth: 40, delay: '1.2s', dur: '9s' },
  { left: '68%', top: '70%', size: 8, depth: 18, delay: '0.6s', dur: '8s' },
  { left: '28%', top: '78%', size: 5, depth: 34, delay: '2s', dur: '10s' },
  { left: '45%', top: '12%', size: 3, depth: 48, delay: '1.6s', dur: '6.5s' },
  { left: '90%', top: '52%', size: 5, depth: 22, delay: '0.3s', dur: '8.5s' },
  { left: '8%', top: '58%', size: 4, depth: 38, delay: '2.4s', dur: '7.5s' },
  { left: '55%', top: '85%', size: 6, depth: 28, delay: '1s', dur: '9.5s' },
]

function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const blobsY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0])

  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const mx = useSpring(pointerX, { stiffness: 60, damping: 18 })
  const my = useSpring(pointerY, { stiffness: 60, damping: 18 })
  const blobX = useTransform(mx, (v) => v * 40)
  const blobX2 = useTransform(mx, (v) => v * -30)
  const blobY = useTransform(my, (v) => v * 40)
  const blobY2 = useTransform(my, (v) => v * -30)
  const particleX = useTransform(mx, (v) => v * 36)
  const particleY = useTransform(my, (v) => v * 36)

  const handlePointer = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5)
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const resetPointer = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handlePointer}
      onMouseLeave={resetPointer}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20 md:px-20"
    >
      <motion.div style={{ y: blobsY }} className="absolute inset-0 z-0 overflow-hidden">
        <motion.div style={{ x: blobX, y: blobY }} className="hero-blob animate-blob absolute left-[-10%] top-[-5%] h-80 w-80 rounded-full bg-purple-600/50" />
        <motion.div style={{ x: blobX2, y: blobY }} className="hero-blob animate-blob animation-delay-2000 absolute right-[10%] top-[15%] h-72 w-72 rounded-full bg-cyan-400/40" />
        <motion.div style={{ x: blobX, y: blobY2 }} className="hero-blob animate-blob animation-delay-4000 absolute bottom-[10%] left-[30%] h-96 w-96 rounded-full bg-amber-400/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_35%)]" />
        <motion.div style={{ x: particleX, y: particleY }} className="absolute inset-0">
          {particles.map((p, i) => (
            <span
              key={i}
              style={{
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                animationDelay: p.delay,
                animationDuration: p.dur,
              }}
              className="hero-particle animate-float-soft absolute rounded-full"
              aria-hidden="true"
            />
          ))}
        </motion.div>
      </motion.div>

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.div
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="animate-float-soft mb-8"
        >
          <div className="rounded-full bg-gradient-to-tr from-purple-500 via-violet-400 to-amber-300 p-[3px] shadow-2xl shadow-purple-950/40">
            <img
              src="/talha.webp"
              alt="Muhammad Talha"
              loading="eager"
              className="h-32 w-32 rounded-full object-cover md:h-40 md:w-40"
            />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="animate-float-soft mb-6 rounded-full border border-purple-500/40 bg-white/5 px-5 py-2 text-sm font-medium text-slate-200 backdrop-blur-md"
        >
          👋 Available for Full-time Roles
        </motion.div>

        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-['Space_Grotesk'] text-5xl font-bold tracking-tight md:text-7xl"
        >
          <span className="animate-gradient bg-gradient-to-r from-purple-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
            Muhammad Talha
          </span>
        </motion.h1>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-xl font-medium text-cyan-100 md:text-3xl"
        >
          <TypeAnimation
            sequence={[
              'MERN Stack Developer',
              1800,
              'Data Science Enthusiast',
              1800,
              'Full Stack Engineer',
              1800,
              'Problem Solver',
              1800,
            ]}
            wrapper="span"
            speed={45}
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-2xl text-base text-slate-400 md:text-lg"
        >
          Turning Ideas Into Scalable Web Applications
        </motion.p>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            to="projects"
            smooth
            offset={-80}
            duration={600}
            className="rounded-full bg-gradient-to-r from-purple-600 to-violet-600 px-7 py-3.5 font-medium text-white shadow-lg shadow-purple-950/40 transition hover:scale-105"
          >
            View My Work
          </Link>
          <a
            href="/MUHAMMAD%20TALHA%20RESUME.pdf"
            download
            className="rounded-full border border-white/15 px-7 py-3.5 font-medium text-white transition hover:border-purple-400 hover:bg-white/5"
          >
            Download CV
          </a>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-12 flex items-center gap-4"
        >
          <motion.a
            href="https://github.com/Talha-zulfiqar"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -6, scale: 1.12 }}
            whileTap={{ scale: 0.94 }}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white transition-colors hover:border-purple-500 hover:text-purple-300"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/muhammad-talha-25801a215/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -6, scale: 1.12 }}
            whileTap={{ scale: 0.94 }}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white transition-colors hover:border-cyan-400 hover:text-cyan-300"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:talhazulfiqar8334@gmail.com"
            whileHover={{ y: -6, scale: 1.12 }}
            whileTap={{ scale: 0.94 }}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white transition-colors hover:border-emerald-400 hover:text-emerald-300"
            aria-label="Email Talha"
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 10 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <Link to="about" smooth offset={-80} duration={600} className="float-chevron flex flex-col items-center gap-2 text-slate-400 hover:text-white">
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          <FaChevronDown className="text-xl" />
        </Link>
      </motion.div>
    </section>
  )
}

export default Hero