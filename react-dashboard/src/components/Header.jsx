import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      <nav className="flex items-center gap-4">
        <Link to="/" className="text-indigo-600">Home</Link>
        <Link to="/reports" className="text-indigo-600">Reports</Link>
        <Link to="/settings" className="text-indigo-600">Settings</Link>
      </nav>
    </header>
  )
}
