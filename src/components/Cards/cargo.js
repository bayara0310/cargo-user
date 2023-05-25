
import React, { useEffect, useState } from 'react'
import {MdLocationPin} from 'react-icons/md'
import {RiPlaneFill, RiShipFill} from 'react-icons/ri'
import {FaTruckMoving} from 'react-icons/fa'
import Link from 'next/link'
import { GiRailRoad } from 'react-icons/gi'
import { Rate } from 'antd'
import axios from 'axios'
import { commentCargoUri, ratinguri, ratinguriget } from '@/url/uri'

const CargoCard = ({data}) => {
    const [value, setValue] = useState(4.5);
    const land = data.type.filter(type => type === "LAND");
    const water = data.type.filter(type => type === "WATER");
    const rail = data.type.filter(type => type === "RAILROAD");
    const air = data.type.filter(type => type === "AIR");
    const [com, setCom] = useState()

    useEffect(() => {
        loadProfile();
      }, []);

    const loadProfile = async() => {
        try{
            const res = await axios.get(commentCargoUri + `${data._id}`)
            const ress = await axios.get(ratinguriget + `${data._id}`)
            setCom(res.data.cargo.length)
            const pays = (ress.data.reduce((a,v) =>  a = a + v.rating , 0 ).toLocaleString() / ress.data.length)
            setValue(pays)
        }catch(err){
            console.log(err, "aldaa")
        }
    }


  return (
    <div className='group flex justify-center md:mx-0 xs:mx-8'>
        <div className='rounded-xl bg-white w-full mt-4 group-hover:shadow-2xl'>
            <div>
                <img className='rounded-t w-full h-40' src={data.cover_image}/>
            </div>
            <div className='mx-4 pb-8 pt-2'>
                <Link href={`/cargo/all/${data._id}`} className='font-semibold text-lg'>{data.cargo_name}</Link>
                <div className=''>
                {/* <FiStar color='yellow'/>
                <FiStar color='yellow'/>
                <FiStar color='yellow'/>
                <FiStar color='yellow'/>
                <FiStar color='yellow'/> */}
                    <Rate allowHalf value={value} disabled/>
                    <h1 className='text-sm'>Нийт сэтгэгдэл {com}</h1>
                </div>
                <div>
                <div className='flex mt-2 items-start'>
                    <MdLocationPin/>
                    <p className='text-sm'>{data.address}</p>
                    </div>
                </div>
                <div className='flex mt-4 items-center'>
                    <h1 className='text-sm mr-4'>Тээвэрлэлтийн төрөл :</h1>
                    {
                        air.length > 0 &&
                        <RiPlaneFill color='#4F46E5' className='mx-1'/>
                    }
                    {
                        land.length > 0 &&
                        <FaTruckMoving color='#4F46E5' className='mx-1'/>
                    }
                    {
                        water.length > 0 &&
                        <RiShipFill color='#4F46E5' className='mx-1'/>
                    }
                    {
                        rail.length > 0 &&
                        <GiRailRoad color='#4F46E5' className='mx-1'/>
                    }
                </div>
                <Link href='/profile/user'>
                    <div className='text-center bg-gray-200 rounded-md py-1 mt-4 group-hover:bg-indigo-600 group-hover:text-white cursor-pointer'>Бараа захиалах</div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default CargoCard