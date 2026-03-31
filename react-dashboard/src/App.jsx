import React from 'react'

export default function App(){
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center gap-4">
            <input placeholder="Search..." className="px-3 py-2 rounded border" />
            <button className="px-4 py-2 bg-indigo-600 text-white rounded">Upgrade</button>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2 p-6 bg-white rounded-xl shadow">
            <h2 className="font-semibold mb-4">Overview</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-indigo-50 rounded">Metric 1</div>
              <div className="p-4 bg-indigo-50 rounded">Metric 2</div>
              <div className="p-4 bg-indigo-50 rounded">Metric 3</div>
            </div>
          </div>

          <aside className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold mb-2">Activity</h3>
            <p className="text-sm text-gray-500">Recent actions and notifications.</p>
          </aside>
        </section>
      </div>
    </div>
  )
}
