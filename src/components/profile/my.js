import React, { useState } from 'react'
import { FiUser } from 'react-icons/fi'
import {CiLock} from 'react-icons/ci'
import {GoHome} from 'react-icons/go'
import Selfdata from './myitems/selfdata';
import Password from './myitems/password';
import HomeAddress from './myitems/homeaddress';

const My = () => {
  const [datapro, setDatapro] = useState(1);

  return (
    <div className=''>

      <div className='flex'>

        <div onClick={() => setDatapro(1)} className={datapro==1?'flex items-center bg-gray-700 text-white rounded md:px-8 xs:px-2 py-2 cursor-pointer':'flex items-center bg-white rounded md:px-8 xs:px-2 py-2 cursor-pointer'}>
          <div className={datapro==1?'border-r-2 border-white':'border-r-2 border-indigo-600'}>
            <FiUser color={datapro==1?'':'#4F46E5'} className='mr-2' size={30}/>
          </div>
          <div className='ml-3 xs:text-sm md:text-sm'>
            <h1 className={datapro==1?'font-semibold text-gray-100':'font-semibold text-gray-800'}>Хувийн мэдээлэл</h1>
            <h1 className={datapro==1?'text-sm text-gray-200':'text-sm text-gray-600'}>Баярсүрэн</h1>
          </div>
        </div>

        <div className='mx-1'></div>

        <div onClick={() => setDatapro(2)} className={datapro==2?'flex items-center bg-gray-700 text-white rounded md:px-10 xs:px-2 py-2 cursor-pointer':'flex items-center bg-white rounded md:px-10 xs:px-2 py-2 cursor-pointer'}>
          <div className={datapro==2?'border-r-2 border-white':'border-r-2 border-indigo-600'}>
            <CiLock color={datapro==2?'':'#4F46E5'} className='mr-2' size={30}/>
          </div>
          <div className='ml-3 xs:text-sm md:text-sm'>
            <h1 className={datapro==2?'font-semibold text-gray-100':'font-semibold text-gray-800'}>Нууц үг</h1>
            <h1 className={datapro==2?'text-sm text-gray-200':'text-sm text-gray-600'}>Шинчлэх, өөрчлөх</h1>
          </div>
        </div>

        <div className='mx-1'></div>

        <div onClick={() => setDatapro(3)} className={datapro==3?'flex items-center bg-gray-700 text-white rounded md:px-10 xs:px-2 py-2 cursor-pointer':'flex items-center bg-white rounded md:px-10 xs:px-2 py-2 cursor-pointer'}>
          <div className={datapro==3?'border-r-2 border-white':'border-r-2 border-indigo-600'}>
            <GoHome color={datapro==3?'':'#4F46E5'} className='mr-2' size={30}/>
          </div>
          <div className='ml-3 xs:text-sm md:text-sm'>
            <h1 className={datapro==3?'font-semibold text-gray-100':'font-semibold text-gray-800'}>Гэрийн хаяг</h1>
            <h1 className={datapro==3?'text-sm text-gray-200':'text-sm text-gray-600'}>Нэмэх, өөрчлөх</h1>
          </div>
        </div>

      </div>

      <div className='bg-white rounded mt-2'>
        <div>
          {
            datapro==1&&
            <Selfdata/>
          }
          {
            datapro==2&&
            <Password/>
          }
          {
            datapro==3&&
            <HomeAddress/>
          }
        </div>
      </div>

    </div>
  )
}

export default My