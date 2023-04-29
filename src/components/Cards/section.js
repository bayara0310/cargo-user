import Link from 'next/link'
import React from 'react'

const SectionCard = () => {
  return (
    <div className='flex flex-wrap justify-center'>

        <Link href='/profile/user' className="rounded-lg shadow-xl mx-2 py-4 px-4 w-48 m-1 overflow-hidden relative group cursor-pointer font-medium bg-white mt-6">
            <div className="absolute w-72 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-gray-200 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></div>
            <div className="relative text-black transition duration-300  ease">
                <div className="relative text-black ">
                    <div className='flex justify-center'>
                        <img className='w-16' src='/../../icons/shop.png'/>
                    </div>
                    <h1 className='text-center mt-2'>Бараа захиалах</h1>
                </div>
            </div>
        </Link>
        <Link href='/cargo/all' className="rounded-lg shadow-xl mx-2 py-4 px-4 w-48 m-1 overflow-hidden relative group cursor-pointer font-medium bg-white mt-6">
            <div className="absolute w-72 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-gray-200 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></div>
            <div className="relative text-black transition duration-300  ease">
                <div className="relative text-black ">
                    <div className='flex justify-center'>
                        <img className='w-16' src='/../../icons/truck.png'/>
                    </div>
                    <h1 className='text-center mt-2'>Карго хайх</h1>
                </div>
            </div>
        </Link>
        <Link href='/profile/user' className="rounded-lg shadow-xl mx-2 py-4 px-4 w-48 m-1 overflow-hidden relative group cursor-pointer font-medium bg-white mt-6">
            <div className="absolute w-72 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-gray-200 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></div>
            <div className="relative text-black transition duration-300  ease">
                <div className="relative text-black ">
                    <div className='flex justify-center'>
                        <img className='w-16' src='/../../icons/product.png'/>
                    </div>
                    <h1 className='text-center mt-2'>Бараагаа хянах</h1>
                </div>
            </div>
        </Link>

    </div>
  )
}

export default SectionCard