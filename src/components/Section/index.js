import React, { useEffect } from 'react'
import SectionCard from '../Cards/section'
import Aos from 'aos';
import 'aos/dist/aos.css';

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