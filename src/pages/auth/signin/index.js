import { Button, FormControl, FormErrorMessage, Input, FormLabel } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import React, { useState } from 'react'
import {FiAlertTriangle} from "react-icons/fi"
import Link from 'next/link'
import { useRouter } from 'next/router'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import axios from 'axios'
import { authenticate, isAuth } from 'context/AuthContext'

const Signin = () => {
  const router = useRouter();
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false);


  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  // const onSubmit = async values => {
  //   console.log("haha")
  //   try{
  //     const res = await axios.post(`http://localhost:8000/api/signin`, values)
  //     console.log(res)
  //     if(res.status === 200){
  //       router.push('/profile/user')
  //     }
  //   }catch(err){
  //     console.log(err.response.data.error)
  //     setMessage(err.response.data.error)
  //   }
  // }

  const onSubmit = values => {
    setLoading(true)
    const email = values.email
    const password = values.password
    axios({
      method: 'POST',
      url: `http://localhost:8000/api/signin`,
      data: { email, password}
    })
    .then(response=>{
      authenticate(response, () => {
        isAuth() && isAuth().role == 'subscriber' ? router.push('/profile/user') : alert("chi sub bish");
      });
    })
    .catch(error => {
      console.log('signup error', error.response.data.error)
      setMessage(error.response.data.error);
      setLoading(false)

    })
  }

  return (
    <div>
      <div>
        <div className='grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3'>
          <div className='grid col-span-1 bg-gray-200 h-screen w-full'>
            <div className='xs:mx-10 md:mx-20'>
              <div className='mt-4 flex items-center'>
                <MdKeyboardArrowLeft/>
                <Link href='/'>Нүүр хуудасруу буцах</Link>
              </div>
              <div className='mt-10'>
                <div className='flex justify-center my-4'>
                  <img className='h-14' src='/../../icons/logonobac.png'/>
                </div>
                <h1 className='text-xl uppercase text-center font-semibold'>Тавтай морилно уу !</h1>
                <p className='text-sm text-center mx-6'>Монголын хамгийн том карго системд бүртгүүлж буй таньд баяр хүргэе</p>
              </div>
              {/* ene bol register login button */}
              <div className='mt-8'>
                <div className=' flex w-full shadow-sm'>
                  <Link href='/auth/signin' className={router.asPath == "/auth/signin" ? 'w-1/2 text-center py-2 bg-white rounded-l-lg' : 'w-1/2 text-center py-2 bg-gray-100 rounded-l-lg'}>
                      Нэвтрэх
                  </Link>
                  <Link href='/auth/signup' className={router.asPath == "/auth/signup" ? 'w-1/2 text-center py-2 bg-white rounded-r-lg' : 'w-1/2 text-center py-2 bg-gray-100 rounded-r-lg'}>
                      Бүртгүүлэх
                  </Link>
                </div>
              </div>
              {
                message&&
                <div className='w-full bg-red-500 rounded py-2 mt-4 text-white text-center'>
                  {message}
                </div>
              }
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.email} className="mt-8">
                  <FormLabel htmlFor='email' fontSize='sm'>И-мейл хаяг</FormLabel>
                  <Input
                    id='email'
                    type='email'
                    placeholder='И-мейл хаяг'
                    size='md'
                    rounded="md"
                    ring="1"
                    ringColor='gray.200'
                    bgColor='white'
                    {...register('email', {
                      required: 'И-мейл хаягаа оруулна уу !',
                      pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: 'И-мейл хаяг формат буруу байна.',
                      },
                    })}
                  />
                  <FormErrorMessage>
                    <div className='text-red-700 rounded-md w-full text-sm flex py-1 items-center'>
                      <FiAlertTriangle className='mx-2 '/>
                    <p className='ml-2'>"{errors.email && errors.email.message}"</p>
                    </div>
                  </FormErrorMessage>

                </FormControl>  

                <FormControl isInvalid={errors.password} className="mt-2">
                  <FormLabel htmlFor='password' fontSize='sm'>Нууц үг</FormLabel>
                  <Input
                    id='password'
                    type='password'
                    placeholder='Нууц үг'
                    size='md'
                    rounded="md"
                    ring="1"
                    ringColor='gray.200'
                    bgColor='white'
                    {...register('password', {
                      required: 'Нууц үгээ оруулна уу !',
                      pattern: {
                        message: 'Нууц үг нь дор хаяж 8 тэмдэгтээс бүрдэх бөгөөд дор хаяж нэг том, нэг жижиг үсэг, нэг тоо агуулсан байх ёстой.',
                      },
                      minLength: { value: 8, message: "Хамгийн багадаа 8 тэмдэгт" },
                      maxLength: { value: 20, message: "Хамгийн ихдээ 20 тэмдэгт байна." },
                    })}
                  />
                  <FormErrorMessage>
                    <div className='text-red-700 rounded-md w-full text-sm flex py-1 items-center'>
                      <FiAlertTriangle className='mx-2 '/>
                    <p className='ml-2'>"{errors.password && errors.password.message}"</p>
                    </div>
                  </FormErrorMessage>

                </FormControl>
                <div className='flex justify-end'>
                  <Link href="/auth/forget" className='text-md mt-2 text-blue-600'>Нууц үгээ мартсан уу ?</Link>
                </div>
                <Button mt={8} bg="green.500" colorScheme='blue.400' isLoading={loading} width='full' type='submit'>
                  Нэвтрэх
                </Button>
              </form>
            </div>
          </div>
          <div className='grid col-span-2'>
            <div className='flex justify-center items-center p-8'>
              <img className='w-full' src='https://app.dfavo.com/assets/login/images/login-image.svg'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin