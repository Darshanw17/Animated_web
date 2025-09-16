import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {

  return (
    <div className='font-[font2] relative flex items-center justify-center gap-3 '>
      <p className='absolute pointer-events-none lg:w-[27vw] w-100 lg:right-20 right-1 bottom-24 lg:bottom-72 font-[font1] text-[clamp(12px,1.2vw,15px)] leading-relaxed'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 is an agency that designs every action to nurture the brand tomorrow, in 5 months, and in 5 years. We seek the friction that sparks emotion. To ensure an honest relationship, we stay unfiltered: we say what needs to be said, and we do what needs to be done.</p>
      <div className='relative z-10 lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] h-12 md:h-14 lg:h-16 flex items-center px-5 md:px-8 lg:px-10 border-white rounded-full uppercase'>
        <Link className='text-[clamp(16px,2.5vw,24px)]' to='/projects'>Projects</Link>
      </div>
      <div className='relative z-10 lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] h-12 md:h-14 lg:h-16 flex items-center px-5 md:px-8 lg:px-10 border-white rounded-full uppercase'>
        <Link className='text-[clamp(16px,2.5vw,24px)]' to='/agence'>agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText