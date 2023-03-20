import Navbar from '@/components/Navbar'
import Comments from '@/components/profile/comments';
import Getorder from '@/components/profile/getorder';
import My from '@/components/profile/my';
import Order from '@/components/profile/order';
import { Avatar } from '@chakra-ui/react'
import axios from 'axios';
import { getCookie, isAuth, signout } from 'context/AuthContext';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import {RxExit} from 'react-icons/rx'

const User = () => {
    const [route, setRoute] = useState(1);
    const router = useRouter();
    const [values, setValues] = useState({
        name:"",
        email:"",
        password:"",
        buttonText:"Submit",
        error: "",
        role: ""
      });

    const token = getCookie('token')

    useEffect(() => {
        loadProfile();
      }, []);

      const loadProfile = () => {
        axios({
          method: 'GET',
          url: `http://localhost:8000/api/user/${isAuth()?._id}`,
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
        //   console.log('Profile', response)
          const {role, name, email} = response.data
          setValues({...values, role, name, email})
        })
        .catch(error => {
          console.log('error', error.response.data.error)
          if(error.response.status == 401){
            signout(() => {
              router.push('/')
            });
          }
        })
      }

      const { name, email, password, buttonText, role } = values;

  return (
    <div className='bg-gray-100 h-screen'>
        <Navbar/>
        <div className='xs:block md:container'>
        <div className='grid xl:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1'>
            <div className='grid col-span-1 m-2'>
                <div className='bg-white w-full rounded shadow-md'>
                    <div className='my-8'>
                        <div className='flex justify-center'>
                          <Avatar size='xl'/>
                        </div>
                        <div>
                            <h1 className='text-center mt-4 text-md'>{name}</h1>
                            <p className='text-center mt-1 text-sm text-gray-600'>{email}</p>
                        </div>
                        <div className='flex items-center bg-gray-100 mx-4 mt-4 rounded p-1'>
                            <div className='ml-2'>
                                <img className='h-9' src='/../../icons/wallet.png'/>
                            </div>
                            <div className='ml-2'>
                                <p className='text-sm text-gray-600'>Таны хэтэвч</p>
                                <div className='text-xl'>0 ₮</div>
                            </div>
                        </div>

                        <div className='mt-4'>
                            <div className={route==1? 'border-l-4 border-indigo-600 cursor-pointer font-semibold' : 'cursor-pointer ml-1'} onClick={() => setRoute(1)}>
                                <h1 className={route==1? 'mx-4 py-1 text-indigo-600' : 'mx-4 py-1'}>Хувийн мэдээлэл</h1>
                            </div>
                            <div className={route==2? 'border-l-4 mt-1 border-indigo-600 cursor-pointer font-semibold' : 'mt-1 cursor-pointer ml-1'} onClick={() => setRoute(2)}>
                                <div className='flex items-center justify-between'>
                                   <h1 className={route==2? 'mx-4 py-1 text-indigo-600' : 'mx-4 py-1'}>Миний захиалгууд</h1>
                                   <h1 className='mr-4 bg-gray-100 rounded-sm px-2 font-semibold text-gray-800'>0</h1>
                                </div>
                            </div>
                            <div className={route==3? 'border-l-4 mt-1 border-indigo-600 cursor-pointer font-semibold' : 'mt-1 cursor-pointer ml-1'} onClick={() => setRoute(3)}>
                                <h1 className={route==3? 'mx-4 py-1 text-indigo-600' : 'mx-4 py-1'}>Захиалга өгөх</h1>
                            </div>
                            <div className={route==4? 'border-l-4 mt-1 border-indigo-600 cursor-pointer font-semibold' : 'mt-1 cursor-pointer ml-1'} onClick={() => setRoute(4)}>
                                <h1 className={route==4? 'mx-4 py-1 text-indigo-600' : 'mx-4 py-1'}>Миний сэтгэгдэлүүд</h1>
                            </div>

                            <div>
                                <div className='mt-8 ml-5 flex items-center hover:text-gray-500'>
                                    <RxExit/>
                                    <h1 className='cursor-pointer ml-2' onClick={() => {
                                        signout(() => {
                                            router.push('/');
                                        })
                                    }}>Гарах</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='grid col-span-3 m-2 w-full'>
                <div className='overflow-x-scroll'>
                    <div>
                        {
                            route===1&&
                            <My/>
                        }
                         {
                            route===2&&
                            <Order/>
                        }
                        {
                            route===3&&
                            <Getorder/>
                        }
                         {
                            route===4&&
                            <Comments/>
                        }
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default User