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
    <>
     <div className={`${darkMode ? 'dark bg-black': 'light bg-white'}`}>
        <section id="hero" className='w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20' style={{backgroundImage: `url(${heroimg})`}}>

          <h1 data-aos='zoom-in' className='text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]'>Find Your Next Home In Las Vegas</h1>
          <p data-aos='zoom-in' className='text-white text-xl lg:pr-[500px] pr-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nostrum sequi sunt assumenda explicabo dicta accusantium. Id nemo quibusdam asperiores saepe. Sit ipsum non repellendus praesentium eligendi reprehenderit dolores accusamus!
          </p>

        </section>
     </div> 

     <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} z-10`}>
      <div data-aos='zoom-in' id='form' className={`${darkMode ? 'dark bg-gray-800' : 'light bg-white'} lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14`}>
        <div className='w-full'>
          <h1 className='text-black font-semibold dark:text-white'>Location</h1>
          <input type="text" placeholder="Enter Address, State, Pincode or city" className='bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]'/>
        </div>

      </div>
     </div>
    </>
  )
}

export default Hero
