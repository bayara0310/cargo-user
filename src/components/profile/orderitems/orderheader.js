import React from 'react'

const OrderHeader = () => {
  return (
    <div className='hidden sm:block'>
        <div className='flex w-full'>

        <div className='flex items-center bg-white rounded md:px-8 xs:px-2 py-2 w-1/4 justify-center hover:ring-1 ml-1'>
          <div className='border-r-2 border-gray-600 '>
            {/* <FiUser color='#4F46E5' className='mr-2' size={32}/> */}
            <img className='w-10 mr-2' src='/../../icons/sent.png'/>
          </div>
          <div className='ml-3 xs:text-sm md:text-sm'>
            <h1 className='font-semibold text-gray-800'>Илгээсэн</h1>
            <h1 className='text-lg text-gray-600'>10</h1>
          </div>
        </div>

        <div className='mx-1'></div>

        <div className='flex items-center bg-white rounded md:px-8 xs:px-2 py-2 w-1/4 justify-center hover:ring-1'>
          <div className='border-r-2 border-yellow-600 '>
            {/* <FiUser color='#4F46E5' className='mr-2' size={32}/> */}
            <img className='w-10 mr-2' src='/../../icons/comfirm.png'/>
          </div>
          <div className='ml-3 xs:text-sm md:text-sm'>
            <h1 className='font-semibold text-yellow-800'>Баталгаажсан</h1>
            <h1 className='text-lg text-gray-600'>10</h1>
          </div>
        </div>

        <div className='mx-1'></div>

        <div className='flex items-center bg-white rounded md:px-8 xs:px-2 py-2 w-1/4 justify-center hover:ring-1'>
          <div className='border-r-2 border-pink-400 '>
            {/* <FiUser color='#4F46E5' className='mr-2' size={32}/> */}
            <img className='w-10 mr-2' src='/../../icons/huleen.png'/>
          </div>
          <div className='ml-3 xs:text-sm md:text-sm'>
            <h1 className='font-semibold text-pink-800'>Хүлээн авсан</h1>
            <h1 className='text-lg text-gray-600'>10</h1>
          </div>
        </div>

        <div className='mx-1'></div>

        <div className='flex items-center bg-white rounded md:px-8 xs:px-2 py-2 w-1/4 justify-center hover:ring-1'>
          <div className='border-r-2 border-green-600 '>
            {/* <FiUser color='#4F46E5' className='mr-2' size={32}/> */}
            <img className='w-10 mr-2' src='/../../icons/irsen.png'/>
          </div>
          <div className='ml-3 xs:text-sm md:text-sm'>
            <h1 className='font-semibold text-green-800'>Ирсэн</h1>
            <h1 className='text-lg text-gray-600'>10</h1>
          </div>
        </div>

        <div className='mx-1'></div>

        </div>
      </div>

  )
}

export default OrderHeader