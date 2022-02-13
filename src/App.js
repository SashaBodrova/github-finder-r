import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'

import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {
  return (
    <HashRouter basename='https://sashabodrova.github.io/github-finder-r'>
      <div className="flex flex-col justify-between h-screen">

        <Navbar />

        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route exact path='/' element={ <Home /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='*' element={ <NotFound/> } />
          </Routes>
        </main>

        <Footer />

      </div>
    </HashRouter>
  )
}

export default App;