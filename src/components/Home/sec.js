import React from 'react'

const SecComp = () => {
  return (
    <div className='sm:block md:container mt-20 mb-40'>
        <div className='xs:mx-8 md:mx-0'>
            <h1 className='uppercase text-xl'>Манай системийн ажиллах дараалал</h1>
        </div>
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 mt-40 xs:mx-8 md:mx-0'>
            <div className='grid col-span-1 m-2'>
                <div className='bg-gray-100 rounded-xl pb-10 hover:bg-white hover:ring-2  hover:shadow-lg p-8'>
                    <img className='p-4 mt-[-120px] bg-[#E1EAFB] rounded-2xl h-48 w-full' src='/../../background/3.png'/>
                    <h1 className='text-gray-700 text-center mt-6'>Хэрэглэгч бараагаа сонгон захиалах</h1>
                </div>
            </div>
            <div className='grid col-span-1 m-2'>
                <div className='bg-gray-100 rounded-xl pb-10 hover:bg-white hover:ring-2 hover:shadow-lg p-8'>
                    <img className='p-4 mt-[-120px] bg-[#E1EAFB] rounded-2xl h-48 w-full' src='/../../background/1.png'/>
                    <h1 className='text-gray-700 text-center mt-6'>Захиалсан барааг хүлээн авах</h1>
                </div>
            </div>
            <div className='grid col-span-1 m-2'>
                <div className='bg-gray-100 rounded-xl pb-10 hover:bg-white hover:ring-2 hover:shadow-lg p-8'>
                    <img className='p-4 mt-[-120px] bg-[#E1EAFB] rounded-2xl h-48 w-full' src='/../../background/4.png'/>
                    <h1 className='text-gray-700 text-center mt-6'>Хэрэглэгчийн бараа замдаа гарах</h1>
                </div>
            </div>
            <div className='grid col-span-1 m-2'>
                <div className='bg-gray-100 rounded-xl pb-10 hover:bg-white hover:ring-2 hover:shadow-lg p-8'>
                    <img className='p-4 mt-[-120px] bg-[#E1EAFB] rounded-2xl h-48 w-full' src='/../../background/2.png'/>
                    <h1 className='text-gray-700 text-center mt-6'>Захиалгыг хүлээлгэж өгөх</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecComp