import { Button, Input, InputGroup, InputLeftElement, Spinner, Textarea } from '@chakra-ui/react'
import {PhoneIcon} from '@chakra-ui/icons'
import React, { useState } from 'react'
import { BiDownload, BiHome, BiWorld } from 'react-icons/bi'
import { BsCloudDownload } from 'react-icons/bs'
import {AiFillInstagram, AiOutlineArrowLeft, AiOutlineDownload} from 'react-icons/ai'
import { FaFacebook, FaFacebookF, FaHome, FaInstagram, FaLocationArrow, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'
import { MdAttachEmail, MdOutlineMailOutline } from 'react-icons/md'
import axios from 'axios'
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../../../firebase";
import { toast } from 'react-toastify'
import { cargoadd } from '@/url/uri'


const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({logo: "", cover_image: "", cargo_name:"", email:"", phone_number:"", overview:"", website:"", address:""});
  const [list, setList] = useState(1);

  const sentData = async () => {
    if(data.logo === "" && data.cover_image==="" && data.cargo_name === "" && data.email ==="" && data.phone_number === "" && data.overview === "" && data.website === "" && data.address === ""){
      return toast.error("Таны мэдээлэл дутуу байна. Бүрэн бөглөнө үү !")
    }
    setLoading(true)
    try{
      const res = await axios.post(cargoadd, data);
      console.log(res.data)
      if(res.status === 200){
        setList(1)
        toast.success("Таны хүсэлтийг илгээлээ бид таны и-мейл хаягруу мэдээлэл илгээх болно.")
        setLoading(false);
      }
      setLoading(false);
    }catch(err){
      setLoading(false);
      console.log(err)
    }
  }

  const logoImage = async (url) => {
    if (url) {
      try {
        console.log(url)
        setData({...data, logo:url})
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    } else {
      setLoading(false);
      return toast.warning("Зураг боловсруулж байна түр хүлээгээрэй");
    }
  };

  const handleSubmit = async (file) => {
    setLoading(true);
    const imageRef = ref(storage, `images/${file.name}`);
    uploadBytes(imageRef, file)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            logoImage(url);
          })
          .catch((error) => {
            setLoading(false);
            console.log(error.message, "error getting the image url");
          });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
      });
  };

  const logoImage1 = async (url) => {
    if (url) {
      try {
        console.log(url)
        setData({...data, cover_image:url})
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    } else {
      setLoading(false);
      return toast.warning("Зураг боловсруулж байна түр хүлээгээрэй");
    }
  };

  const handleSubmit1 = async (file) => {
    setLoading(true);
    const imageRef = ref(storage, `images/${file.name}`);
    uploadBytes(imageRef, file)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            logoImage1(url);
          })
          .catch((error) => {
            setLoading(false);
            console.log(error.message, "error getting the image url");
          });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
      });
  };



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
                {
                  list === 1&&
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
                            <Input type='tel' placeholder='Нэр' onChange={e=> setData({...data, cargo_name: e.target.value})}/>
                          </InputGroup>

                          <h1 className='text-sm font-semibold mt-2'>Байгууллагын товч танилцуулга *</h1>
                          <InputGroup marginTop='2'>
                            <Textarea type='text' className='placeholder:mr-8' placeholder='Танилцуулга' 
                            onChange={e=> setData({...data, overview: e.target.value})}/>
                          </InputGroup>

                          <h1 className='text-sm font-semibold mt-2'>Утасны дугаар *</h1>
                          <InputGroup marginTop='2'>
                            <InputLeftElement
                              pointerEvents='none'
                              children={<PhoneIcon color='gray.500' />}
                            />
                            <Input type='tel' placeholder='Утасны дугаар' 
                            onChange={e=> setData({...data, phone_number: e.target.value})}/>
                          </InputGroup>

                        <div className='flex mt-4'>
                            <div className="relative">
                              <input
                                placeholder="Image"
                                className="absolute bottom-0 w-1/2 z-10 opacity-0"
                                type="file"
                                size="xs"
                                onChange={(e) => handleSubmit(e.target.files[0])}
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
                                accept='image/*'
                                size="xs"
                                onChange={(e) => handleSubmit1(e.target.files[0])}
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

                          {
                            list === 1&&
                            <Button mt='16' onClick={e=> setList(2)} colorScheme='blue' bgColor='indigo' w='full' textColor='white'>Дараах</Button>
                          }

                      </div>
                </div>
                }


                {
                  list === 2&&
                  <div className='bg-white mt-20 rounded px-10 py-6 overflow-y-auto h-4/5'>
                    <div onClick={e=> setList(1)} className="cursor-pointer flex items-center">
                      <AiOutlineArrowLeft/>
                      <h1 className='ml-2 text-sm'>Өмнөх</h1>
                    </div>
                        <div className=''>

                          <h1 className='text-sm font-semibold mt-2'>И-мейл хаяг *</h1>
                          <InputGroup marginTop='2'>
                            <InputLeftElement
                              pointerEvents='none'
                              children={<MdAttachEmail color='gray' />}
                            />
                            <Input px='28' className='' type='tel' placeholder='И-мейл хаяг' 
                            onChange={e=> setData({...data, email: e.target.value})}/>
                          </InputGroup>

                          <h1 className='text-sm font-semibold mt-2'>Хаяг *</h1>
                          <InputGroup marginTop='2'>
                            <InputLeftElement
                              pointerEvents='none'
                              children={<FaLocationArrow color='gray' />}
                            />
                            <Input type='tel' placeholder='Хаяг'
                            onChange={e=> setData({...data, address: e.target.value})} />
                          </InputGroup>

                          <h1 className='text-sm font-semibold mt-2'>Вебсайт *</h1>
                          <InputGroup marginTop='2'>
                            <InputLeftElement
                              pointerEvents='none'
                              children={<BiWorld color='gray' />}
                            />
                            <Input type='tel' placeholder='Вебсайт' 
                            onChange={e=> setData({...data, website: e.target.value})}/>
                          </InputGroup>

                          {
                            list === 2&&
                            <Button mt='16' onClick={sentData} colorScheme='blue' bgColor='indigo' w='full' textColor='white'>
                              {
                                loading&&
                                <Spinner mr='2'/>
                              }
                              Илгээх
                            </Button>
                          }

                      </div>
                </div>
                }


                 
            </div>
          </div>
      </div>

     </div>
    </div>
  )
}

export default Signup