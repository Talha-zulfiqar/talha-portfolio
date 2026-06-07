import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 md:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 text-center">
        <p className="font-['Space_Grotesk'] text-lg font-semibold text-transparent bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text">
          Designed & Built by Muhammad Talha
        </p>

        <div className="flex items-center gap-4">
          <a href="https://github.com/Talha-zulfiqar" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-purple-500 hover:text-purple-300" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-talha-25801a215/" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-cyan-400 hover:text-cyan-300" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:talhazulfiqar8334@gmail.com" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-emerald-400 hover:text-emerald-300" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>

        <p className="text-sm text-slate-400">© 2026 Muhammad Talha. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer