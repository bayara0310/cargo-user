import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {BsTruck} from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'
import {SlWallet} from 'react-icons/sl'
import {AiFillPhone, AiFillInstagram, AiFillFacebook, AiFillTwitterCircle, AiFillYoutube} from 'react-icons/ai'
import { isAuth } from 'context/AuthContext'

const Navbar = () => {
  const [load, setLoad] = useState(false)

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = () => {
    if(isAuth()){
      setLoad(true)
    }
  }

  return (
    <div className='bg-white shadow-md'>
        <div className=''>
          {/* section heseg */}
           <div className='py-2 bg-indigo-600 text-white hidden md:block '>
             <div className='container flex justify-between items-center'>
                <div>
                  <h1 className='text-sm'>E-cargo -д тавтай морил</h1>
                </div>
                <div className='flex items-center text-sm'>
                  <span className="relative flex ">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <AiFillPhone size='18' color='yellow' className='relative inline-flex rounded-full'/>
                  </span>
                  <h1 className='ml-2 border-r pr-2'>8066-6605</h1>
                  <h1 className='ml-2 border-r pr-2 flex'>
                    <AiFillInstagram size='16' className='mx-1 cursor-pointer hover:animate-bounce'/>
                    <AiFillFacebook size='16' className='mx-1 cursor-pointer hover:animate-bounce'/>
                    <AiFillTwitterCircle size='16' className='mx-1 cursor-pointer hover:animate-bounce'/>
                    <AiFillYoutube size='16' className='mx-1 cursor-pointer hover:animate-bounce'/>
                  </h1>
                  <h1 className='ml-2 border-r pr-2 '>Тусламж</h1>
                </div>
             </div>
           </div>
           {/* Navbar heseg */}
           <div className='border-t border-gray-200 hidden md:block'>
            <div className='container'>
               <div className='flex justify-between py-3 items-center'>

                <Link href='/'>
                   <img className='h-14' src='/../../icons/logo.png'/>
                </Link>

                <div className='text-sm flex items-center'>
                  <div className='flex items-center'>
                    <SlWallet size='24'/>
                    <div className='uppercase mr-4 ml-2'>
                       <div className='text-xs'>Хэвтэвч</div>
                       <div>0 ₮</div>
                    </div>
                  </div>
                  {
                    load&&
                    <div>
                       {
                        isAuth() && (
                          <Link href='/profile/user'>
                            <div className='mr-5 flex items-center hover:text-gray-500'>
                              <BiUser className='mr-1' size='16'/>
                              <div className=''>Hi' {isAuth().name}</div>
                            </div>
                          </Link>
                        )
                      }
                    </div>
                  }
                   {
                    !load&&
                    <div>
                       <Link href='/auth/signin'>
                            <div className='mr-5 flex items-center uppercase'>
                              <BiUser className='mr-1' color='black' size='16'/>
                              <div className='hover:text-gray-600'>Нэвтрэх</div>
                            </div>
                          </Link>
                    </div>
                  }
                    <Link href="/cargo/signup" className="rounded-md px-3.5 py-2 bg-indigo-600 m-1 overflow-hidden relative group cursor-pointer border font-medium text-gray-100">
                        <div className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></div>
                        <div className="relative text-white transition duration-300 group-hover:text-indigo-600 ease">
                            <div className='flex items-center'>
                                <div className='mr-2'><BsTruck size='16'/></div>
                                <h1>Каргогоо бүртгүүлэх</h1>
                            </div>
                        </div>
                    </Link>
                </div>

               </div>
            </div>
           </div>

        </div>
    </div>
  )
}

export default Navbar
