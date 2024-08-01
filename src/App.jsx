import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Workon from './components/Workon'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
   <div>
    <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Workon/>
    <Contact/>
    <Footer/>
   </div>
    <Toaster />
    </>
  )
}

export default App