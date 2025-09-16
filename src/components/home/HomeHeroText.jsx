import React from 'react'
import Video from './Video'

export default function HomeHeroText() {
  return (
    <div className='font-[font-1] pt-5 text-center'>
      <div className='text-[7.5vw] justify-center flex items-center uppercase leading-[8vw]'>
        The Spark
      </div>
      <div className='text-[7.5vw] justify-center flex items-start uppercase leading-[8vw]'>
        that
        <div className=" h-[7vw] w-[16vw] rounded-full overflow-hidden mt-2">
          <Video />
        </div>
        generates
      </div>
      <div className='text-[7.5vw] justify-center flex items-center uppercase leading-[8vw]'>
         creativity 
      </div>
    </div>
  )
}
