import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaHeart, FaTimes } from 'react-icons/fa'
import { artworks } from '../data/art'

const STARS = [
  { x: 0, y: -26 },
  { x: 22, y: -14 },
  { x: 24, y: 12 },
  { x: 0, y: 26 },
  { x: -24, y: 12 },
  { x: -22, y: -14 },
]

function FeaturedArt() {
  const [liked, setLiked] = useState({})
  const [bursts, setBursts] = useState({})
  const [loaded, setLoaded] = useState({})
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (active === null) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  const toggleLike = (index) => {
    setLiked((prev) => {
      const next = { ...prev, [index]: !prev[index] }
      if (next[index]) setBursts((b) => ({ ...b, [index]: (b[index] || 0) + 1 }))
      return next
    })
  }

  return (
    <section id="art" className="px-6 py-20 md:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-amber-300">Featured Art</p>
          <h2 className="mt-3 font-['Space_Grotesk'] text-3xl font-bold text-white md:text-5xl">
            A <span className="text-gradient-gold animate-gradient">curated gallery</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            A small collection where each piece breathes. Hover to let the gallery light fall on it, tap the heart, or
            click to view it full-frame. (Placeholder pieces — swap with your own anytime.)
          </p>
        </motion.div>

        <div className="gap-6 [column-fill:_balance] sm:columns-2 lg:columns-3">
          {artworks.map((art, index) => (
            <motion.div
              key={art.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: 'easeOut' }}
              className="mb-6 break-inside-avoid"
            >
              <motion.figure
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="art-card group relative cursor-pointer overflow-hidden rounded-3xl border border-amber-200/10"
                style={{ backgroundColor: art.tone }}
                onClick={() => setActive(index)}
              >
                <img
                  src={art.src}
                  alt={`${art.title} — ${art.medium}, ${art.year}`}
                  loading="lazy"
                  decoding="async"
                  onLoad={() => setLoaded((p) => ({ ...p, [index]: true }))}
                  className={`art-img art-breathe w-full object-cover transition-[opacity,filter] duration-700 ${
                    loaded[index] ? 'opacity-100 blur-0' : 'opacity-0 blur-md'
                  }`}
                />

                <span className="art-spotlight pointer-events-none absolute inset-0" aria-hidden="true" />

                <figcaption className="metadata pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                  <div>
                    <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-white drop-shadow">{art.title}</h3>
                    <p className="mt-0.5 text-xs text-amber-100/80">
                      {art.medium} · {art.year}
                    </p>
                  </div>

                  <div className="pointer-events-auto relative">
                    <button
                      type="button"
                      aria-label={liked[index] ? `Unlike ${art.title}` : `Like ${art.title}`}
                      aria-pressed={Boolean(liked[index])}
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleLike(index)
                      }}
                      className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-md transition ${
                        liked[index]
                          ? 'border-rose-400/40 bg-rose-500/20 text-rose-300'
                          : 'border-white/20 bg-black/30 text-white hover:border-amber-300/60 hover:text-amber-200'
                      }`}
                    >
                      <motion.span
                        key={`heart-${bursts[index] || 0}`}
                        initial={liked[index] ? { scale: 0.6 } : false}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 14 }}
                      >
                        <FaHeart />
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {liked[index] && bursts[index] ? (
                        <span
                          key={`burst-${bursts[index]}`}
                          className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
                        >
                          {STARS.map((s, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 1, x: 0, y: 0, scale: 0.4 }}
                              animate={{ opacity: 0, x: s.x, y: s.y, scale: 1 }}
                              transition={{ duration: 0.6, ease: 'easeOut' }}
                              className="absolute text-amber-300"
                              style={{ fontSize: 10 }}
                            >
                              ★
                            </motion.span>
                          ))}
                        </span>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </figcaption>
              </motion.figure>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null ? (
          <motion.div
            className="art-lightbox fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              aria-label="Close artwork"
              onClick={() => setActive(null)}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
            >
              <FaTimes />
            </button>

            <motion.figure
              key={artworks[active].title}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 26 }}
              className="flex max-h-full max-w-4xl flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={artworks[active].src}
                alt={`${artworks[active].title} — ${artworks[active].medium}, ${artworks[active].year}`}
                className="max-h-[78vh] w-auto rounded-2xl object-contain shadow-[0_30px_120px_rgba(212,175,55,0.18)]"
              />
              <figcaption className="mt-5 text-center">
                <h3 className="font-['Space_Grotesk'] text-2xl font-semibold text-white">{artworks[active].title}</h3>
                <p className="mt-1 text-sm text-amber-100/80">
                  {artworks[active].medium} · {artworks[active].year}
                </p>
              </figcaption>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}

export default FeaturedArt
