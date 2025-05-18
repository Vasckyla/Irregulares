
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Resenas from './pages/Resenas'
import VistaPosteo from './pages/VistaPosteo'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/resenas" element={<Resenas />} />
        <Route path="/blog/:id" element={<VistaPosteo />} />
        <Route path="/podcast" element={<div>Podcast</div>} />
        <Route path="/contacto" element={<div>Contacto</div>} />
      </Routes>
      <Footer />
    </>
  )
}
