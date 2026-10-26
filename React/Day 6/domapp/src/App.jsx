import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Help from './pages/Help.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
