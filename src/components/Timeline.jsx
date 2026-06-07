import { motion } from 'framer-motion'
import { timeline } from '../data/timeline'

function Timeline() {
  return (
    <section id="journey" className="min-h-screen px-6 py-20 md:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">My Journey</p>
          <h2 className="mt-3 font-['Space_Grotesk'] text-3xl font-bold text-white md:text-5xl">Milestones that shaped my path</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-purple-500 via-cyan-400 to-purple-500 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10 md:space-y-0">
            {timeline.map((item, index) => {
              const alignRight = index % 2 === 1

              return (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="relative mb-10 md:mb-0 md:grid md:grid-cols-2 md:items-center"
                >
                  {alignRight ? (
                    <>
                      <div className="hidden md:block" />
                      <div className="ml-10 md:ml-0 md:pl-12">
                        <div className="glass-card inline-flex rounded-full px-4 py-1.5 text-sm font-medium text-purple-200">{item.year}</div>
                        <div className="mt-4 glass-card rounded-3xl p-6 transition hover:-translate-y-1 hover:border-purple-500/30">
                          <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-white md:text-2xl">{item.title}</h3>
                          <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">{item.description}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="ml-10 md:ml-0 md:pr-12 md:text-right">
                        <div className="md:ml-auto md:inline-flex">
                          <div className="glass-card inline-flex rounded-full px-4 py-1.5 text-sm font-medium text-purple-200">{item.year}</div>
                        </div>
                        <div className="mt-4 glass-card rounded-3xl p-6 transition hover:-translate-y-1 hover:border-purple-500/30">
                          <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-white md:text-2xl">{item.title}</h3>
                          <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">{item.description}</p>
                        </div>
                      </div>
                      <div className="hidden md:block" />
                    </>
                  )}

                  <span className="absolute left-[0.55rem] top-10 h-4 w-4 rounded-full border-4 border-[#0a0a0f] bg-gradient-to-r from-purple-500 to-cyan-400 shadow-lg shadow-purple-500/40 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline