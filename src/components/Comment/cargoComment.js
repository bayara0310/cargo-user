import { Avatar } from '@chakra-ui/react'
import React from 'react'

const CargoComment = () => {
  return (
    <div>
        <div className='flex bg-gray-100 rounded p-2 mt-4'>
            <div>
                <Avatar size='sm' rounded='full'/>
            </div>
            <div className='mx-4'>
                <div className='flex justify-between'>
                    <div>
                      <h1 className='text-ms font-semibold'>Kenzo Nakamura</h1>
                      <h1 className='text-sm'>bayarsuren0310@gmail.com</h1>
                    </div>
                    <p className='ml-2 text-sm text-geray-600'>8 month ago</p>
                </div>
                <p className='text-sm mt-1'>Маш сайн газар бараагаа хүлээж авсан сэтгэгдэл өндөр байна хүлээж авсан сэтгэгдэл өндөр байна.</p>
            </div>
        </div>
    </div>
  )
}

export default CargoComment