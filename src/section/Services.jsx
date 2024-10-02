import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import { service } from '../components/export'
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: "ease-in",
      delay: 100,
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} pb-20`}>
      <section id='services' className={`${darkMode ? 'dark bg-gray-800' : 'light bg-red-100'} lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-10`}>
        <div className='flex flex-col justify-center items-start gap-4'>
          <h1 data-aos='zoom-in' className='text-red-500 dark:text-white'>OUR SERVICES</h1>
          <h1 data-aos='zoom-in' className='text-black text-[40px] font-semibold leading-10 dark:text-white'>Top Real Estate <br /><br /> Services available
          </h1>
        </div>

        <div id='service-box' className='grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8'>
          {
            service.map((item, index) => (
              <div data-aos='zoom-in' data-aos-delay='200' key={index} className='bg-white dark:bg-black h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-red-500 hover:bg-red-300 cursor-pointer'>
                <div className='p-6 rounded-full bg-red-200'>
                  <item.icon className='text-red-600 size-10 tranform hover:scale-110 transition-transform duration-300 cursor-pointer'/>
                </div>

                <h1 className='text-black text-[22px] font-semibold dark:text-white'>{item.title}</h1>
                <p className='text-lg text-slate-700 dark:text-white'>{item.desc}</p>
                <button className='border-b-2 border-red-600 text-red-600 font-semibold p-0 dark:text-white'>READ MORE</button>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default Services
