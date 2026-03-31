import React from 'react'

export default function Home(){
  return (
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
  )
}
