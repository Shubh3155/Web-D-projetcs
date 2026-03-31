export default function Header(){
  return (
    <header className="flex items-center justify-between mb-8">
      <h1 className="text-2xl font-bold text-cyan-700">Acme</h1>
      <nav className="space-x-4 text-cyan-600">
        <a className="hover:underline" href="#">Product</a>
        <a className="hover:underline" href="#">Docs</a>
        <a className="hover:underline" href="#">Contact</a>
      </nav>
    </header>
  )
}
