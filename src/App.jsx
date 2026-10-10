// Dependencies
import { Route, Routes } from "react-router-dom"
import { Footer } from "./layout/Footer"
// Layout components
import { Navbar } from "./layout/Navbar"
// Pages
import { Home } from "./pages/home/Home"
import { NotFound } from "./pages/not-found/NotFound"
import { Preview } from "./pages/preview/Preview"

export default function App() {
  return (
    <main className="justify-center flex flex-col min-w-screen min-h-screen w-full items-center bg-linear-300 from-black/98 from-50% to-black antialiased selection:bg-pink selection:text-neutral-950">
      <Navbar />
      <div className="min-h-screen w-full items-center max-w-4xl lg:px-10 lg:py-40">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </main>
  )
}
