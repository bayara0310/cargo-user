import React from 'react'
import SectionCard from '../Cards/section'

const Section = () => {
  return (
    <div className='sm:block md:container py-10'>
        <div>
            <h1 className='xs:text-sm md:text-2xl uppercase text-center'>E-cargo юу хийдэг вэ ?</h1>
            <SectionCard/>
        </div>
    </div>
  )
}

export default Section