import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[560px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-inner">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-2xl" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Available for projects
            </div>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Hi, I build modern products and playful tech experiences
            </h1>
            <p className="mt-4 text-base text-slate-300 sm:text-lg">
              A compact portfolio of things I’ve designed, engineered, and shipped. If you like the vibe, let’s make something together.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-white transition">
                See projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition">
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
