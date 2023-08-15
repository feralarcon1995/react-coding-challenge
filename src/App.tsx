import { Route, Routes } from 'react-router-dom'
import './App.css'
//pages
import Home from './pages/Home'
import Series from './pages/Series'
import Movies from './pages/Movies'
//components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import EntriesDetail from './pages/EntriesDetail'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movies" element={<Movies />} />
        <Route path=":programType/:title" element={<EntriesDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
