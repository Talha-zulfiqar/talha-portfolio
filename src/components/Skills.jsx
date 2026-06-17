import { motion } from 'framer-motion'
import { skills } from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="min-h-screen px-6 py-20 md:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">Tech Arsenal</p>
          <h2 className="mt-3 font-['Space_Grotesk'] text-3xl font-bold text-white md:text-5xl">Technologies I work with</h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.05 }}
              className="glass-card group rounded-3xl p-6 transition-shadow hover:shadow-[0_0_35px_rgba(124,58,237,0.22)]"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-white">{category.title}</h3>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">Core Stack</span>
              </div>

              <div className="mt-6 space-y-5">
                {category.items.map((skill) => {
                  const Icon = skill.icon

                  return (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 text-slate-100">
                          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-xl text-cyan-300 transition group-hover:bg-purple-500/10">
                            <Icon />
                          </span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          whileInView={{ width: `${skill.level}%` }}
                          initial={{ width: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills