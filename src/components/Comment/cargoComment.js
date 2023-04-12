import { commentUserUri } from '@/url/uri'
import { Avatar } from '@chakra-ui/react'
import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'

const CargoComment = (data) => {
  const [user, setUser] = useState();

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async() => {
    try{
      const res = await axios.get(commentUserUri + data.data.userid);
      setUser(res.data.user)
      console.log(res.data.user)
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div>
        <div className='flex bg-gray-100 rounded p-2 mt-4'>
            <div>
                <Avatar size='sm' rounded='full'/>
            </div>
            <div className='mx-4'>
                <div className='flex justify-between'>
                    <div>
                      <h1 className='text-lg font-semibold'>{user?.name}</h1>
                      <h1 className='text-sm'>{user?.email}</h1>
                    </div>
                   <div className='flex justify-end'>
                      <p className='text-sm font-semibold text-gray-600'>ip хаяг: {data.data.ip}</p>
                      <p className='ml-2 text-sm text-geray-600'>{moment(data.data.createdAt).endOf('min').fromNow()}</p>
                   </div>
                </div>
                <div>
                      <p className='text-sm mt-1'>{data.data.comment}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CargoComment