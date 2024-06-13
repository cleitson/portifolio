import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Thanks from './pages/Thanks'
import Header from './components/Header/Header'

function App() {

  return (
    <div className='bg-[#070D0D] text-white'>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/thanks' element={<Thanks />} />
    </Routes>
    </div>
  )
}

export default App
