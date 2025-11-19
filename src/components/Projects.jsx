import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Realtime Dashboard',
    description: 'Data-rich analytics dashboard with streaming updates and custom visualizations.',
    tags: ['React', 'WebSockets', 'Tailwind'],
    link: '#'
  },
  {
    title: 'E‑commerce Microstore',
    description: 'Checkout flow, product gallery, and order tracking optimized for conversion.',
    tags: ['FastAPI', 'MongoDB', 'Stripe'],
    link: '#'
  },
  {
    title: '3D Product Teaser',
    description: 'Interactive landing with 3D hero and subtle motion to showcase a new launch.',
    tags: ['Spline', 'Framer Motion', 'Vite'],
    link: '#'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Selected work</h2>
            <p className="mt-2 text-slate-300">A snapshot of things I’ve shipped recently.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition">
            Contact me
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              href={p.link}
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/10 transition"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <span className="text-xs text-white/60">{idx + 1}</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/80">{t}</span>
                ))}
              </div>
              <div className="mt-4 text-xs text-white/60 opacity-0 group-hover:opacity-100 transition">View details →</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
