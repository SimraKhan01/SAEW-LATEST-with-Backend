import { useEffect } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"

function App() {
  useEffect(() => {
    document.body.classList.add("page-loaded")
    return () => document.body.classList.remove("page-loaded")
  }, [])

  return (
    <div className="min-h-screen bg-white text-[#0F0F0F]">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
