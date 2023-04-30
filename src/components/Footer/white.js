import React from 'react'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaDiscord, FaFacebookF } from 'react-icons/fa'

const FooterWhite = () => {
  return (
    <div className='bg-white mt-20'>
        <div className='xs:mx-4 md:container pb-10'>
            <h1 className='text-2xl pt-8 font-Lato'>Бидэнтэй нэгдэх</h1>
            <p className='mt-2'>Хүссэн сошиал сувгаараа нэгдэж хялбар дөхмөөр мэдээ мэдээллээ аваарай.</p>
            <div className='flex my-4'>
                <div className='bg-blue-700 rounded-full cursor-pointer hover:opacity-60 p-4'>
                    <FaFacebookF color='white' className='' size='24'/>
                </div>
                <div className='bg-pink-700 rounded-full cursor-pointer hover:opacity-60 p-4 ml-4'>
                    <BsInstagram color='white' className='' size='24'/>
                </div>
                <div className='bg-blue-400 rounded-full cursor-pointer hover:opacity-60 p-4 ml-4'>
                    <BsTwitter color='white' className='' size='24'/>
                </div>
                <div className='bg-blue-600 rounded-full cursor-pointer hover:opacity-60 p-4 ml-4'>
                    <FaDiscord color='white' className='' size='24'/>
                </div>
            </div>
            <div className='mt-8'>
                <h1 className='opacity-70 text-center'>E-cargo.mn системийн бүх өмч оюуны эрхээр хамгаалагдсан болно.</h1>
            </div>
        </div>
    </div>
  )
}

export default FooterWhite