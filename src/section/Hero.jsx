import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import heroimg from '../../assets/images/hero1.webp'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 200,
      easing: 'ease-in',
      delay: 100,
    })  
  }, [])

  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div>
      
    </div>
  )
}

export default Hero
