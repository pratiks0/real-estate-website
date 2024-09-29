import React from 'react'
import { DarkModeProvider } from './components/DarkModeContext'
import About from './section/About'
import Clients from './section/Clients'
import Contact from './section/Contact'
import Hero from './section/Hero'
import PopularAreas from './section/PopularAreas'
import Services from './section/Services'
import Properties from './section/Properties'
import Header from './components/Header'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <PopularAreas />
        <Properties />
        <Services/>
        <Clients/>
        <Contact/>
        <Footer/>
      </DarkModeProvider>
    </>
  )
}

export default App
