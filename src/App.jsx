import { useState } from 'react'

import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Fact from './Pages/Fact'
import Pnf1 from './Pages/Pnf1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/landingpage' element={<LandingPage/>} />
      <Route path='/' element={<Fact/>} />
      <Route path='*' element={<Pnf1/>} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
