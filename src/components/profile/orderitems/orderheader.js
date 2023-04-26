import { BARAA, userorderfilteruri } from '@/url/uri';
import axios from 'axios';
import { isAuth } from 'context/AuthContext';
import React, { useEffect, useState } from 'react'

const OrderHeader = () => {
  const [reg, setReg] = useState()
  const [rec, setRec] = useState()
  const [app, setApp] = useState()
  const [came, setCame] = useState()

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async() => {
      try{
          const res = await axios.post(userorderfilteruri, {id: isAuth()?._id, status: BARAA.REGISTERED});
          const ress = await axios.post(userorderfilteruri, {id: isAuth()?._id, status: BARAA.RECEIVED});
          const resss = await axios.post(userorderfilteruri, {id: isAuth()?._id, status: BARAA.APPROVED});
          const ressss = await axios.post(userorderfilteruri, {id: isAuth()?._id, status: BARAA.CAME});
          
          setRec(ress.data.cargo.length)
          setReg(res.data.cargo.length)
          setApp(resss.data.cargo.length)
          setCame(ressss.data.cargo.length)
      }catch(err){
          console.log(err);
      }
  }

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
            <h1 className='text-lg text-gray-600'>{reg}</h1>
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
            <h1 className='text-lg text-gray-600'>{app}</h1>
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
            <h1 className='text-lg text-gray-600'>{rec}</h1>
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
            <h1 className='text-lg text-gray-600'>{came}</h1>
          </div>
        </div>

        <div className='mx-1'></div>

        </div>
      </div>

  )
}

export default OrderHeader