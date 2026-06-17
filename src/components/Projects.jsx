import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { projects } from '../data/projects'

const filters = ['All', 'MERN', 'Data Science', 'DevOps', 'C++']

function matchesFilter(project, filter) {
  if (filter === 'All') return true
  if (filter === 'MERN') {
    return ['React', 'Node.js', 'MongoDB', 'Express'].some((tag) => project.tags.includes(tag))
  }

  return project.category === filter
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = useMemo(
    () => projects.filter((project) => matchesFilter(project, activeFilter)),
    [activeFilter],
  )

  return (
    <section id="projects" className="min-h-screen px-6 py-20 md:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">Selected Projects</p>
          <h2 className="mt-3 font-['Space_Grotesk'] text-3xl font-bold text-white md:text-5xl">Things I&apos;ve built</h2>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  isActive ? 'bg-purple-600 text-white shadow-lg shadow-purple-950/30' : 'border border-white/10 bg-white/5 text-slate-300 hover:border-purple-500 hover:text-white'
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="gallery-tile glass-card group relative overflow-hidden rounded-3xl p-6 transition-shadow hover:shadow-[0_18px_60px_rgba(212,175,55,0.22)]"
            >
              <span className="gallery-light pointer-events-none absolute inset-0" aria-hidden="true" />
              <div className="relative mb-4 flex items-center justify-between gap-3">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-100">
                  {project.category}
                </span>
                {project.github !== '#' ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} GitHub repository`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-purple-500 hover:text-purple-300"
                  >
                    <FaGithub />
                  </a>
                ) : (
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/5 bg-white/5 text-slate-500" aria-hidden="true">
                    <FaGithub />
                  </span>
                )}
              </div>

              <h3 className="relative font-['Space_Grotesk'] text-xl font-semibold text-white">{project.title}</h3>
              <p className="relative mt-3 min-h-[96px] text-sm leading-7 text-slate-300">{project.desc}</p>

              <div className="relative mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-cyan-400/15 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects