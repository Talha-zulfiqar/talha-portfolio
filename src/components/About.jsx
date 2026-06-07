import { motion } from 'framer-motion'

const stats = [
  { label: 'Projects', value: '5+' },
  { label: 'Internships', value: '2' },
  { label: 'FYP Completed', value: '1' },
]

function About() {
  return (
    <section id="about" className="min-h-screen px-6 py-20 md:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">About Me</p>
          <div className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-white md:text-5xl">Building products that feel fast, useful, and dependable.</h2>
            <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              I&apos;m a MERN Stack Developer and BS Information Technology graduate (CGPA 3.2/4.0) from University of Education, Lahore. Currently doing my Data Science internship at Arch Technologies. I love building scalable full-stack applications and solving real-world problems with clean code.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card rounded-3xl p-5 text-center transition hover:-translate-y-1 hover:border-purple-500/30">
                  <div className="font-['Space_Grotesk'] text-3xl font-bold text-white">{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card overflow-hidden rounded-3xl border-purple-500/20"
          >
            <div className="flex items-center gap-2 border-b border-white/10 bg-black/40 px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs uppercase tracking-[0.3em] text-slate-400">Terminal</span>
            </div>
            <div className="bg-[#04110d] px-5 py-6 font-mono text-sm text-emerald-300 md:px-7 md:py-8">
              <div className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-emerald-300 pr-2">
                <p>const talha = {'{'}</p>
                <p>&nbsp;&nbsp;role: &quot;MERN Developer&quot;,</p>
                <p>&nbsp;&nbsp;location: &quot;Lahore, PK&quot;,</p>
                <p>&nbsp;&nbsp;available: true,</p>
                <p>&nbsp;&nbsp;skills: [&quot;React&quot;, &quot;Node.js&quot;, &quot;MongoDB&quot;]</p>
                <p>{'}'}</p>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-emerald-200/80">
                <span className="cursor-blink inline-block h-3 w-2 rounded-sm bg-emerald-300 align-middle" />
                typing clean solutions for real users...
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About