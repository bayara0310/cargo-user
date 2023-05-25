import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import Link from 'next/link'
import CargoCard from '@/components/Cards/cargo'
import axios from 'axios'
import { filtersAllCargo } from '@/url/uri'
import FooterWhite from '@/components/Footer/white'
import { Spin } from 'antd'
import { countrylists } from '../../../url/uri'

const All = () => {
    const [cargo, setCargo] = useState([]);
    const [nation, setNation] = useState([]);
    const [type, setType] = useState([]);
    const [loading, setLoading] = useState(false);
    const [country, setCountry] = useState([]);

    const [natDrop, setNatDrop] = useState(true);
    const [typeDrop, setTypeDrop] = useState(false);

    useEffect(() => {
        loadProfile();
      }, [nation, type]);

    const loadProfile = async() => {
        setLoading(true)
        try{
            const res = await axios.post(filtersAllCargo, {nation: nation, type: type });
            console.log(res.data)
            const ress = await axios.get(countrylists);
            setCountry(ress.data);
            setCargo(res.data.cargo)

            setLoading(false)
        }catch(err){
            setLoading(false)
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
    <div className='bg-gray-100 h-full'>
        <Navbar/>
        <div className=''>
            <div className='w-full xs:block md:container mt-4'>
                <Link href='/' className='text-sm mx-2 text-gray-700'>Нүүр {'>'} Бүх карго</Link>
                <div className='mt-4'>
                    <div className='grid md:grid-cols-4 xs:grid-cols-1'>
                        <div>
                            <div className='grid col-span-1 mx-2'>
                                <div>
                                    <div className='rounded-sm ring-[0.5px] ring-gray-300 bg-white w-full h-full'>
                                        <div className='p-4'>

                                            <div onClick={ e=> setNatDrop(!natDrop)} className='bg-gray-100 px-4 rounded py-2 w-full flex justify-between items-center cursor-pointer hover:bg-gray-200'>
                                            <h1 className='font-semibold'>Улсууд</h1>
                                            {
                                                natDrop?
                                                <IoIosArrowUp/>
                                                :
                                                <IoIosArrowDown/>
                                            }
                                            </div>

                                            <div className={natDrop? 'ml-8 mt-4 text-ms':'ml-8 mt-4 text-ms hidden'}>
                                                {
                                                    country.map((i, index) => {
                                                        return(
                                                            <div key={index} className='flex items-center my-2'>
                                                                <input
                                                                        className='cursor-pointer'
                                                                        type="checkbox"
                                                                        checked={nation.includes(i._id)}
                                                                        onChange={() => nationset(i._id)}
                                                                        />
                                                                <h1 className='ml-2'>{i.name}</h1>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>

                                            <div onClick={() => setTypeDrop(!typeDrop)} className='bg-gray-100 px-4 rounded py-2 w-full flex items-center justify-between mt-2 cursor-pointer hover:bg-gray-200'>
                                            <h1 className='font-semibold'>Ангилал</h1>
                                            {
                                                typeDrop?
                                                <IoIosArrowUp/>
                                                :
                                                <IoIosArrowDown/>
                                            }
                                            </div>
                                            
                                            <div className={typeDrop?'ml-8 mt-4 text-ms':'ml-8 mt-4 text-ms hidden'}>

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
                                {
                                    loading?
                                    <div className='flex justify-center items-center mt-20'>
                                        <Spin/>
                                        <h1 className='mb-2 ml-4'>Уншиж байна...</h1>
                                    </div>
                                    :
                                    ""
                                }

                                <div className='grid xl:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-2'>
                                    {
                                        cargo.map((item, index) => {
                                        return(
                                            <>
                                            {
                                                !loading&&
                                                <CargoCard key={index} data={item}/>
                                            }
                                            </>
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
        <FooterWhite/>
    </div>
  )
}

export default All