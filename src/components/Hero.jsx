import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaChevronDown, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-scroll'

function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20 md:px-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="hero-blob animate-blob absolute left-[-10%] top-[-5%] h-80 w-80 rounded-full bg-purple-600/50" />
        <div className="hero-blob animate-blob animation-delay-2000 absolute right-[10%] top-[15%] h-72 w-72 rounded-full bg-cyan-400/40" />
        <div className="hero-blob animate-blob animation-delay-4000 absolute bottom-[10%] left-[30%] h-96 w-96 rounded-full bg-fuchsia-500/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_35%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 rounded-full border border-purple-500/40 bg-white/5 px-5 py-2 text-sm font-medium text-slate-200 backdrop-blur-md"
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
          <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
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
          <a
            href="https://github.com/Talha-zulfiqar"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white transition hover:-translate-y-1 hover:border-purple-500 hover:text-purple-300"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-talha-25801a215/"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:talhazulfiqar8334@gmail.com"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white transition hover:-translate-y-1 hover:border-emerald-400 hover:text-emerald-300"
            aria-label="Email Talha"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>

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