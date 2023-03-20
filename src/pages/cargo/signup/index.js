import { Button, Input, InputGroup, InputLeftElement, Textarea } from '@chakra-ui/react'
import {PhoneIcon} from '@chakra-ui/icons'
import React from 'react'
import { BiDownload, BiHome } from 'react-icons/bi'
import { BsCloudDownload } from 'react-icons/bs'
import {AiFillInstagram, AiOutlineDownload} from 'react-icons/ai'
import { FaFacebook, FaFacebookF, FaHome, FaInstagram, FaLocationArrow, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'
import { MdAttachEmail, MdOutlineMailOutline } from 'react-icons/md'

const Signup = () => {
  return (
    <div className=' bg-earth1 bg-opacity-25 bg-cover bg-center w-full h-screen mx-auto p-2'>
      <div className='flex justify-between  mx-16'>
        <Link href='/'>
          <img className='h-16' src='/../../icons/logowhite.png'/>
        </Link>
        <div className='flex items-center'>
          <div className='rounded-md bg-indigo-600 p-2 hover:bg-indigo-700 cursor-pointer mx-1'>
            <FaFacebookF color='white'/>
          </div>
          <div className='rounded-md bg-indigo-600 p-2 hover:bg-indigo-700 cursor-pointer mx-1'>
            <AiFillInstagram color='white'/>
          </div>
          <div className='rounded-md bg-indigo-600 p-2 hover:bg-indigo-700 cursor-pointer mx-1'>
            <FaTwitter color='white'/>
          </div>
        </div>
      </div>
     <div className='grid grid-cols-2'>

      <div className='grid col-span-1'>
         <div className='flex items-center justify-center'>
            <div className=''>
                <div className=''>
                  <p className=' text-gray-300 mt-6'>E-CARGO ALL IN CARGO SERVICE</p>
                  <h1 className='text-white font-semibold text-4xl '>Өөрийн каргогоо</h1>
                  <h1 className='text-white font-semibold text-4xl'>бүртгүүлэх</h1>
                  <p className=' text-gray-300 mt-6'>Та манай платформыг ашиглан 2 минутын дотор өөрийн каргогоо</p>
                  <p className=' text-gray-300'>бүртгүүлж захиалга, агуулах, төлбөр, хүргэлтээ автоматжуулаарай.</p>
                  <div className='mt-10 flex'>
                    <Button colorScheme='blue' textColor='white' bgColor='indigo'>
                      <BsCloudDownload className='mx-2'/>
                      Танилцуулга татах
                    </Button>
                    <div className='mx-2'></div>
                    <Button colorScheme='blue' className='' textColor='white' bgColor='indigo'>
                      <AiOutlineDownload color='white' className='mx-2'/>
                      Гарын авлага татах
                    </Button>
                  </div>
                </div>
              </div>
         </div>
      </div>

      <div className='grid col-span-1'>
          <div className='w-full h-full'>
            <div className='flex justify-center items-center '>
                      <div className='bg-white mt-4 rounded px-10 py-6 overflow-y-auto h-4/5'>
                        <h1 className='text-lx font-semibold uppercase'>каргогоо бүртгүүлэх</h1>
                        <p className='text-ms text-gray-600'>Таны бөглөсөн мэдээллээр таны карго үүсэх болно.</p>
                        <div>

                          <h1 className='text-sm font-semibold mt-4'>Карго нэр *</h1>
                          <InputGroup marginTop='2'>
                            <InputLeftElement
                              pointerEvents='none'
                              children={<FaHome color='gray' />}
                            />
                            <Input type='tel' placeholder='Нэр' />
                          </InputGroup>

                          <h1 className='text-sm font-semibold mt-2'>Байгууллагын товч танилцуулга *</h1>
                          <InputGroup marginTop='2'>
                            <Textarea type='text' className='placeholder:mr-8' placeholder='Танилцуулга' />
                          </InputGroup>

                          <h1 className='text-sm font-semibold mt-2'>Утасны дугаар *</h1>
                          <InputGroup marginTop='2'>
                            <InputLeftElement
                              pointerEvents='none'
                              children={<PhoneIcon color='gray.500' />}
                            />
                            <Input type='tel' placeholder='Утасны дугаар' />
                          </InputGroup>

                          <h1 className='text-sm font-semibold mt-2'>И-мейл хаяг *</h1>
                          <InputGroup marginTop='2'>
                            <InputLeftElement
                              pointerEvents='none'
                              children={<MdAttachEmail color='gray' />}
                            />
                            <Input type='tel' placeholder='И-мейл хаяг' />
                          </InputGroup>

                          <h1 className='text-sm font-semibold mt-2'>Хаяг *</h1>
                          <InputGroup marginTop='2'>
                            <InputLeftElement
                              pointerEvents='none'
                              children={<FaLocationArrow color='gray' />}
                            />
                            <Input type='tel' placeholder='Хаяг' />
                          </InputGroup>

                        <div className='flex'>
                          <div className="relative">
                              <input
                                placeholder="Image"
                                className="absolute bottom-0 w-1/2 z-10 opacity-0"
                                type="file"
                                size="xs"
                              />
                              <Button
                                size="sm"
                                className="z-0 mt-2"
                              >
                                <BsCloudDownload className='mx-2'/>
                                Лого оруулах
                              </Button>
                            </div>
                            <div className="relative">
                              <input
                                placeholder="Image"
                                className="absolute bottom-0 w-1/2 z-10 opacity-0 "
                                type="file"
                                size="xs"
                              />
                              <Button
                                size="sm"
                                className="z-0 mt-2 ml-2"
                              >
                                <BsCloudDownload className='mx-2'/>
                                Ковер зураг оруулах
                              </Button>
                            </div>
                        </div>

                          <Button mt='4' colorScheme='blue' bgColor='indigo' w='full' textColor='white'>Илгээх</Button>
                      </div>
                </div>
            </div>
          </div>
      </div>

     </div>
    </div>
  )
}

export default Signup