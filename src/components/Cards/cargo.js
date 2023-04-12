
import React from 'react'
import {MdLocationPin} from 'react-icons/md'
import {RiPlaneFill, RiShipFill} from 'react-icons/ri'
import {FaTruckMoving} from 'react-icons/fa'
import Link from 'next/link'
import { FiStar } from 'react-icons/fi'

const CargoCard = ({data}) => {
    console.log(data)
  return (
    <div className='group'>
        <div className='rounded bg-white w-72 mt-4 group-hover:shadow-xl'>
            <div>
                <img className='rounded-t w-72 h-40' src={data.cover_image}/>
            </div>
            <div className='mx-4 pb-8 pt-2'>
                <Link href={`/cargo/all/${data._id}`} className='font-semibold text-lg'>{data.cargo_name}</Link>
                <div className='flex items-center'>
                <FiStar color='yellow'/>
                <FiStar color='yellow'/>
                <FiStar color='yellow'/>
                <FiStar color='yellow'/>
                <FiStar color='yellow'/>
                <h1 className='ml-2'>5</h1>
                <h1 className='ml-8'>{'(Сэтгэгдэл 24)'}</h1>
                </div>
                <div>
                <div className='flex mt-2 items-start'>
                    <MdLocationPin/>
                    <p className='text-sm'>{data.address}</p>
                    </div>
                </div>
                <div className='flex mt-4 items-center'>
                    <h1 className='text-sm mr-4'>Тээвэрлэлтийн төрөл :</h1>
                    <RiPlaneFill color='#4F46E5'/>
                    <FaTruckMoving color='#4F46E5' className='mx-2'/>
                    <RiShipFill color='#4F46E5'/>
                </div>
                <div className='text-center bg-gray-200 rounded-md py-1 mt-4 group-hover:bg-indigo-600 group-hover:text-white cursor-pointer'>Бараа захиалах</div>
            </div>
        </div>
    </div>
  )
}

export default CargoCard