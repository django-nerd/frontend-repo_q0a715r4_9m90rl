import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 sm:h-16 sm:px-10">
          <a href="#home" className="font-semibold tracking-tight">Your Name</a>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-10 px-4 py-6 sm:space-y-16 sm:px-6 sm:py-10">
        <Hero />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Your Name — Built with love and good vibes
      </footer>
    </div>
  )
}

export default App
