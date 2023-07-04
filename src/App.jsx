import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import Index from './components/Index'


const App = () => {
  return (
    <div>
      <Index/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
