export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
        <span className="font-bold text-xl">Harvest Table</span>
        <a href="#cta" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition">
          View Menu
        </a>
      </nav>

      <header className="max-w-4xl mx-auto text-center px-6 py-24">
        <p className="uppercase tracking-wide text-emerald-600 font-semibold mb-4">Meal Kit Delivery</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Dinner, solved — fresh ingredients, no planning</h1>
        <p className="text-lg text-slate-600 mb-10">Pre-portioned ingredients and chef-designed recipes delivered to your door weekly.</p>
        <a href="#cta" className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition">
          Get $40 Off Your First Box
        </a>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Chef-Designed Recipes</h3>
          <p className="text-slate-600">New menu every week, ready in 30 minutes.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Pre-Portioned</h3>
          <p className="text-slate-600">Exactly what you need — zero food waste.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Flexible Delivery</h3>
          <p className="text-slate-600">Pause, skip, or swap meals with one tap.</p>
        </div>
      </section>

      <section id="cta" className="bg-emerald-600 text-white text-center px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">Tonight’s dinner is one box away</h2>
        <p className="mb-8 text-emerald-100">Skip or cancel any week, no commitment.</p>
        <a href="#" className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-100 transition">
          Get $40 Off Your First Box
        </a>
      </section>

      <footer className="text-center py-8 text-slate-400 text-sm">
        © 2026 Harvest Table. All rights reserved.
      </footer>
    </div>
  )
}
