import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'

const contactItems = [
  { label: 'Email', value: 'talhazulfiqar8334@gmail.com', href: 'mailto:talhazulfiqar8334@gmail.com', icon: FaEnvelope },
  { label: 'LinkedIn', value: 'linkedin.com/in/muhammad-talha-25801a215', href: 'https://www.linkedin.com/in/muhammad-talha-25801a215/', icon: FaLinkedin },
  { label: 'GitHub', value: 'github.com/Talha-zulfiqar', href: 'https://github.com/Talha-zulfiqar', icon: FaGithub },
  { label: 'Location', value: 'Lahore, Pakistan', icon: FaMapMarkerAlt },
]

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`)
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`)

    window.setTimeout(() => {
      window.location.href = `mailto:talhazulfiqar8334@gmail.com?subject=${subject}&body=${body}`
      setIsSubmitting(false)
    }, 500)
  }

  return (
    <section id="contact" className="min-h-screen px-6 py-20 md:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">Contact</p>
          <h2 className="mt-3 font-['Space_Grotesk'] text-3xl font-bold text-white md:text-5xl">Let&apos;s Connect</h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactItems.map((item) => {
              const Icon = item.icon
              const Card = item.href ? 'a' : 'div'

              return (
                <Card
                  key={item.label}
                  href={item.href}
                  target={item.href?.startsWith('http') ? '_blank' : undefined}
                  rel={item.href?.startsWith('http') ? 'noreferrer' : undefined}
                  className="glass-card flex items-center gap-4 rounded-3xl p-5 transition hover:-translate-y-1 hover:border-purple-500/30"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-lg text-cyan-300">
                    <Icon />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{item.label}</p>
                    <p className="mt-1 text-white">{item.value}</p>
                  </div>
                </Card>
              )
            })}
          </motion.div>

          <motion.form
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            onSubmit={handleSubmit}
            className="glass-card space-y-5 rounded-3xl p-6 md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-300">
                <span>Name</span>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-white/10 bg-[#08080d] p-3 text-white outline-none transition placeholder:text-slate-500 focus:border-purple-500"
                  placeholder="Your name"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Email</span>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-white/10 bg-[#08080d] p-3 text-white outline-none transition placeholder:text-slate-500 focus:border-purple-500"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="block space-y-2 text-sm text-slate-300">
              <span>Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full rounded-lg border border-white/10 bg-[#08080d] p-3 text-white outline-none transition placeholder:text-slate-500 focus:border-purple-500"
                placeholder="Tell me about your project or opportunity..."
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 px-6 py-3.5 font-medium text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? 'Opening mail client...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact