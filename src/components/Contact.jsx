export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 sm:px-10 text-center">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Let’s build something</h2>
        <p className="mt-3 text-slate-300">
          If you’d like to collaborate or have a project in mind, reach out. I’m open to freelance and product collaborations.
        </p>
        <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white/90 backdrop-blur">
          <span className="text-sm">Contact me:</span>
          <a href="mailto:you@example.com" className="font-semibold hover:underline">you@example.com</a>
        </div>
      </div>
    </section>
  )
}
