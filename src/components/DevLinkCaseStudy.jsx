import { motion } from 'framer-motion'
import { FaCheckCircle, FaGithub } from 'react-icons/fa'

const techPills = ['Node.js', 'Express', 'MongoDB', 'React', 'Socket.io', 'WebRTC', 'JWT', 'Stripe']
const features = [
  'Real-time video calls (WebRTC)',
  'Live chat (Socket.io)',
  'JWT Authentication',
  'Stripe Payment Integration',
  'Role-based access (Mentor/Developer)',
  'Session booking system',
]

function DevLinkCaseStudy() {
  return (
    <section id="devlink" className="min-h-screen px-6 py-20 md:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">Final Year Project</p>
          <h2 className="mt-3 font-['Space_Grotesk'] text-3xl font-bold text-white md:text-5xl">DevLink — Developer Mentorship Platform</h2>
          <p className="mt-4 max-w-3xl text-slate-400 md:text-lg">Connecting developers with mentors through real-time collaboration</p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-[2rem] border-purple-500/30 p-6 md:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-flex rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-200">
                ⭐ Final Year Project
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Problem</p>
                <p className="mt-3 text-lg leading-8 text-slate-200">Junior developers struggle to find experienced mentors.</p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Solution</p>
                <p className="mt-3 text-lg leading-8 text-slate-200">A full-stack platform for video calls, live chat, and session booking.</p>
              </div>

              <div className="flex flex-wrap gap-3">
                {techPills.map((pill) => (
                  <span key={pill} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
                    {pill}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://github.com/Talha-zulfiqar/DevLink-Platform"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 px-6 py-3 font-medium text-white transition hover:scale-105"
                >
                  <FaGithub />
                  View GitHub
                </a>
                <div className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-300">
                  Supervised by: <span className="text-white">Dr. khalid Mahmood, University of Education</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-card rounded-3xl p-6">
                <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-white">Features</h3>
                <div className="mt-5 space-y-4">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-slate-200">
                      <FaCheckCircle className="mt-1 text-cyan-300" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-3xl p-6">
                <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-white">Architecture</h3>
                <div className="mt-5 space-y-4 text-sm text-slate-200">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4">React Client</div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4">Express API</div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4">MongoDB</div>
                  </div>
                  <div className="flex items-center gap-3 text-cyan-300">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                    <span>Socket.io</span>
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4">WebRTC P2P</div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4">Realtime Sync</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DevLinkCaseStudy