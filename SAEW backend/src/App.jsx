import { lazy, Suspense, useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

const Home = lazy(() => import("./pages/Home"))

function App() {
  useEffect(() => {
    document.body.classList.add("page-loaded")
    return () => document.body.classList.remove("page-loaded")
  }, [])

  return (
    <div className="min-h-screen bg-white text-[#0F0F0F]">
      <Header />
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
