import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Header from './components/Header'

function App() {

  return (
    <div className='App bg-[#1a1a1a] w-full h-screen'>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </div>
  )
}

export default App
