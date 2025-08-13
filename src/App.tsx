import './App.css'

export default function App() {
  const a = 2
  const b = a * a * a

  return (
    <main className="prose p-10">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      {b}
    </main>
  )
}
