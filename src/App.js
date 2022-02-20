import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Alert from './components/layouts/Alert'

import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import User from './pages/User'

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col justify-between h-screen">

        <Navbar />

        <main className='container mx-auto px-3 pb-12'>
          <Alert />
          <Routes>
            <Route exact path='/' element={ <Home /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/user/:login' element={ <User /> } />
            <Route path='*' element={ <NotFound/> } />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  )
}

export default App;
