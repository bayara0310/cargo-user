import { Button, FormControl, FormErrorMessage, Input, FormLabel } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import React from 'react'
import {FiAlertTriangle} from "react-icons/fi"
import Link from 'next/link'
import { useRouter } from 'next/router'
import {MdKeyboardArrowLeft} from 'react-icons/md'

const Forget = () => {
  const router = useRouter();


  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values) {
    console.log(values)
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
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
                  <img className='h-14' src='/../../icons/logo.png'/>
                </div>
                <h1 className='text-xl uppercase text-center font-semibold'>Нууц үг сэргээх !</h1>
                <p className='text-sm text-center mx-6'>Та өөрийн и-мейлээр нууц үгээ сэргээгээрэй.</p>
              </div>
              {/* ene bol register login button */}
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
                  <Link href="/auth/forgot" className='text-md mt-2 text-blue-600'>Нууц үгээ мартсан уу ?</Link>
                </div>
                <Button mt={8} bg="green.500" colorScheme='blue.400' isLoading={isSubmitting} width='full' type='submit'>
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

export default Forget