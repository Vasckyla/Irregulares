
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
        <Route path="/blog/:id" element={<VistaPosteo url="https://script.google.com/macros/s/AKfycbxwKjos7eKqdpY4SDS0qrEZtlNGWl3dM_--b_QKZok3txVffwpCkQPDxbY8QXKsqUzbgQ/exec" />} />
        <Route path="./resenas" element={<Resenas />} />
        <Route path="/resenas/:id" element={<VistaPosteo url="https://script.google.com/macros/s/AKfycbz3caW8VnrkH3Smr6J03ShVhZvGlnucBw5xxIsrgNK46eSRlWqb59SDBUmxc4YOcJAjzw/exec" />} />
        <Route path="/podcast" element={<div>Podcast</div>} />
        <Route path="/contacto" element={<div>Contacto</div>} />
      </Routes>
      <Footer />
    </>
  )
}
