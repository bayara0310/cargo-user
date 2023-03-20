import { Button, Input, Select } from '@chakra-ui/react'
import React from 'react'

const Selfdata = () => {
  return (
    <div className='py-4 mx-4'>

      <div>
        <h1 className='text-lg font-semibold'>Хувийн мэдээлэл</h1>
      </div>

      <div className='mt-2'>
        <div>
          <h1 className='ml-2'>Нэр *</h1>
          <Input placeholder='Баярсүрэн' ringColor='gray.200' rounded='lg' className='mt-1' size='md'/>
        </div>
      </div>

      <div className='mt-2'>
        <div>
          <h1 className='ml-2'>Хүйс *</h1>
          <Select className='mt-1' size='md'>
            <option>Сонгох</option>
            <option>Эр</option>
            <option>Эм</option>
          </Select>
        </div>
      </div>

      <div className='mt-2'>
        <div>
          <h1 className='ml-2'>Төрсөн өдөр *</h1>
          <Input className='mt-1' type='date'/>
        </div>
      </div>

      <div className='flex justify-end mb-4'>
        <button className='bg-gray-700 text-gray-200 rounded px-8 py-2 mt-4 hover:bg-gray-800'>Мэдээллээ хадгалах</button>
      </div>

    </div>
  )
}

export default Selfdata