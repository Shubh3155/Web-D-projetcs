export default function Home(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-white">
      <main className="max-w-5xl mx-auto p-8">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-cyan-700">Acme</h1>
          <nav className="space-x-4 text-cyan-600">
            <a>Product</a>
            <a>Docs</a>
            <a>Contact</a>
          </nav>
        </header>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Next.js + Tailwind starter</h2>
            <p className="text-gray-600 mb-6">A modern landing page built with Next.js and Tailwind CSS.</p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-cyan-600 text-white rounded">Get started</button>
              <button className="px-6 py-3 border rounded border-cyan-200 text-cyan-700">Learn more</button>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow">
            <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=60" alt="preview" className="rounded-lg w-full h-64 object-cover" />
          </div>
        </section>
      </main>
    </div>
  )
}
