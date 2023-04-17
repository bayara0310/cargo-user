import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import Link from 'next/link'
import CargoCard from '@/components/Cards/cargo'
import axios from 'axios'
import { cargostatus, filtersAllCargo } from '@/url/uri'

const All = () => {
    const [cargo, setCargo] = useState([]);
    const [nation, setNation] = useState([]);
    const [type, setType] = useState([]);

    useEffect(() => {
        loadProfile();
      }, [nation, type]);

    const loadProfile = async() => {
        console.log(type)
        try{
            const res = await axios.post(filtersAllCargo, {nation: nation, type: type });
            setCargo(res.data.cargo)
        }catch(err){
            console.log(err)
        }
    }

    const typeset = (value) => {
        if (type.includes(value)) {
          setType((prevValues) =>
            prevValues.filter((prevValue) => prevValue !== value)
          );
        } else {
            setType((prevValues) => [...prevValues, value]);
        }
      };

    const nationset = (value) => {
          if (nation.includes(value)) {
          setNation((prevValues) =>
            prevValues.filter((prevValue) => prevValue !== value)
          );
        } else {
            setNation((prevValues) => [...prevValues, value]);
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
                                       <h1 className='ml-4 font-semibold'>Улсууд</h1>
                                    </div>

                                    <div className='ml-8 mt-4 text-ms'>
                                        <div className='flex items-center'>
                                           <input
                                                className='cursor-pointer'
                                                type="checkbox"
                                                checked={nation.includes("CHINA")}
                                                onChange={() => nationset("CHINA")}
                                                />
                                           <h1 className='ml-2'>Хятад</h1>
                                        </div>
                                        <div className='flex items-center mt-2'>
                                           <input
                                                className='cursor-pointer'
                                                type="checkbox"
                                                checked={nation.includes("USA")}
                                                onChange={() => nationset("USA")}
                                                />
                                           <h1 className='ml-2'>Америк</h1>
                                        </div>
                                        <div className='flex items-center mt-2'>
                                           <input
                                                className='cursor-pointer'
                                                type="checkbox"
                                                checked={nation.includes("GER")}
                                                onChange={() => nationset("GER")}
                                                />
                                           <h1 className='ml-2'>Герман</h1>
                                        </div>
                                        <div className='flex items-center mt-2'>
                                           <input
                                                className='cursor-pointer'
                                                type="checkbox"
                                                checked={nation.includes("KOR")}
                                                onChange={() => nationset("KOR")}
                                                />
                                           <h1 className='ml-2'>Солонгос</h1>
                                        </div>
                                    </div>

                                    <div className='bg-gray-100 rounded py-2 w-full flex items-center justify-between mt-4'>
                                       <h1 className='ml-4 font-semibold'>Ангилал</h1>
                                       {/* <IoIosArrowDown className='mr-2'/> */}
                                    </div>
                                    
                                    <div className='ml-8 mt-4 text-ms'>

                                        <div className='flex items-center'>
                                           <input
                                                className='cursor-pointer'
                                                type="checkbox"
                                                checked={type.includes("RAILROAD")}
                                                onChange={() => typeset("RAILROAD")}
                                                />
                                           <h1 className='ml-2'>Төмөр зам</h1>
                                        </div>
                                        <div className='flex items-center mt-2'>
                                           <input
                                                className='cursor-pointer'
                                                type="checkbox"
                                                checked={type.includes("AIR")}
                                                onChange={() => typeset("AIR")}
                                                />
                                           <h1 className='ml-2'>Агаарын</h1>
                                        </div>
                                        <div className='flex items-center mt-2'>
                                           <input
                                                className='cursor-pointer'
                                                type="checkbox"
                                                checked={type.includes("LAND")}
                                                onChange={() => typeset("LAND")}
                                                />
                                           <h1 className='ml-2'>Газрын</h1>
                                        </div>
                                        <div className='flex items-center mt-2'>
                                           <input
                                                className='cursor-pointer'
                                                type="checkbox"
                                                checked={type.includes("WATER")}
                                                onChange={() => typeset("WATER")}
                                                />
                                           <h1 className='ml-2'>Усан тээвэр</h1>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='grid col-span-3'>
                            <div className='mx-2'>

                                <div className='flex items-center bg-white w-full rounded-sm ring-[0.5px] ring-gray-300 py-2 px-3'>
                                    <h1 className='font-semibold text-ms'>Эрэмбэлэх :</h1>
                                    {/* <div className='text-sm ml-4 px-2 cursor-pointer'>
                                        <h1 className='py-2'>Хамгийн олон комменттой</h1>
                                    </div>
                                    <div className='text-sm ml-4 px-2 cursor-pointer'>
                                        <h1 className='py-2'>Хамгийн олон одтой</h1>
                                    </div> */}
                                </div>

                                <div className='grid xl:grid-cols-3 md:grid-cols-1 gap-2'>
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