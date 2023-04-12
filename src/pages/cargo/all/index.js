import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import Link from 'next/link'
import { FiStar } from 'react-icons/fi'
import CargoCard from '@/components/Cards/cargo'
import axios from 'axios'
import { cargostatus } from '@/url/uri'

const All = () => {
    const [cargo, setCargo] = useState([]);

    useEffect(() => {
        loadProfile();
      }, []);

    const loadProfile = async() => {
        try{
            const res = await axios.post(cargostatus, {cargo_status: "APPROVED"})
            setCargo(res.data.data)
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div className='bg-gray-100 h-screen'>
        <Navbar/>
        <div className=''>
            <div className='w-full xs:block md:container mt-4'>
                <Link href='/' className='text-sm mx-2 text-gray-700'>Нүүр {'>'} Бүх карго</Link>
                <div className='mt-4'>
                    <div className='grid md:grid-cols-4 xs:grid-cols-1'>
                        <div className='grid col-span-1 mx-2'>
                            <div className='rounded-sm ring-[0.5px] ring-gray-300 bg-white w-full '>
                                <div className='p-4'>

                                    <div className='bg-gray-100 rounded py-2 w-full'>
                                       <h1 className='ml-4 font-semibold'>Ангилал</h1>
                                    </div>

                                    <div className='ml-8 mt-4 text-ms'>
                                        <h1 className='mt-2 font-semibold cursor-pointer'>Хятад</h1>
                                        <h1 className='mt-2'>Америк</h1>
                                        <h1 className='mt-2'>Герман</h1>
                                        <h1 className='mt-2'>Солонгос</h1>
                                    </div>

                                    <div className='bg-gray-100 rounded py-2 w-full flex items-center justify-between mt-4'>
                                       <h1 className='ml-4 font-semibold'>Ангилал</h1>
                                       <IoIosArrowDown className='mr-2'/>
                                    </div>
                                    
                                    <div className='ml-8 mt-4 text-ms'>
                                        <div className='flex items-center'>
                                           <input type='checkbox'/>
                                           <h1 className='ml-2'>Галт тэрэг</h1>
                                        </div>
                                        <div className='flex items-center mt-2'>
                                           <input type='checkbox'/>
                                           <h1 className='ml-2'>Галт тэрэг</h1>
                                        </div>
                                        <div className='flex items-center mt-2'>
                                           <input type='checkbox'/>
                                           <h1 className='ml-2'>Галт тэрэг</h1>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='grid col-span-3'>
                            <div className='mx-2'>

                                <div className='flex items-center bg-white w-full rounded-sm ring-[0.5px] ring-gray-300 py-2 px-3'>
                                    <h1 className='font-semibold text-ms'>Эрэмбэлэх :</h1>
                                    <div className='text-sm ml-4 border-b-4 border-gray-600 px-2 cursor-pointer'>
                                        <h1 className='py-2'>Энгийн</h1>
                                    </div>
                                    <div className='text-sm ml-4 px-2 cursor-pointer'>
                                        <h1 className='py-2'>Хямдралтай</h1>
                                    </div>
                                </div>

                                <div className='grid grid-cols-3 gap-4'>
                                    {
                                        cargo.map((item, index) => {
                                        return(
                                            <CargoCard key={index} data={item}/>
                                        )
                                        })
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default All