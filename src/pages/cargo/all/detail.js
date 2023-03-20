import CargoComment from '@/components/Comment/cargoComment'
import Navbar from '@/components/Navbar'
import CargoOrderCard from '@/components/Sliders/cargoOrdersCard'
import { AspectRatio, Button, Textarea } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { BsTelephone, BsTelephoneFill } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { FaLocationArrow } from 'react-icons/fa'

const Detail = () => {
  return (
    <div className='bg-gray-100 h-full'>
      <Navbar/>
      <div className='sm:block md:container py-4'>
          <div className='grid md:grid-cols-5 sm:grid-cols-1'>

            <div className='grid md:col-span-3 sm:col-span-1'>
              <div>
                <div className='bg-white w-full rounded-sm shadow-sm pb-20'>
                  <div className='flex p-4 justify-center'>
                    <img className='' src='https://cdn5.shoppy.mn/img/24148/736x368xwebp/hatan1.jpg?h=bde033cfe4e42ebc7fecca5a0ea2364f154d8f0d'/>
                  </div>
                  <div className='mx-4 border-t mt-2'>
                    <h1 className='font-semibold mt-2 text-xl'>Илгээмжийн компаний тухай</h1>
                    <p className='mt-2 text-sm'>Манай бааз нь Улаанбаатар хотоос 340 км, Архангай аймгийн төвөөс 130 км, Монголын эртний нийслэл 
                      Хархорин хотоос 70 км, Түрэгийн Хөшөөт цайдмаас 22 км, Өгийнуур сумын төвөөс 30 км зайд оршино.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='grid md:col-span-2 sm:grid-cols-1'>
             <div>

                <div className='bg-white w-full rounded-sm xs:mt-4 md:mt-0'>
                  <div className='border-l border-gray-200 h-full bg-white rounded-sm'>
                    <div className='mx-8 py-2'>
                      <h1 className='text-xl font-semibold uppercase'>Аригун карго</h1>
                      <div className='mt-4'>

                       <div className='flex items-center'>
                        <CiLocationOn size='18' color=''/>
                        <h1 className='ms ml-2 font-semibold'>Хаяг :</h1>
                        <p className='ml-2'>Баруун 4 зам модны 2 т</p>
                       </div>

                       <div className='flex items-center'>
                        <AiOutlineFieldTime size='18' color=''/>
                        <h1 className='ms ml-2 font-semibold'>Цагийн хуваарь :</h1>
                        <p className='ml-2 text-sm'>Даваа - Баасан 09:00-18:00 Бямба 10:00 - 14:00</p>
                       </div>

                       <div className='flex items-center'>
                        <BsTelephone size='16' color=''/>
                        <h1 className='ms ml-2 font-semibold'>Утасны дугаар :</h1>
                        <p className='ml-2 text-sm'>8080-8080, 9999-6666</p>
                       </div>

                       <div>
                        <h1 className='ms ml-2 font-semibold mb-2 mt-4'>Захиалга авах боломжтой сайтууд :</h1>
                        <CargoOrderCard/>
                       </div>

                      </div>
                      <div className='mt-8'>
                        <div className='bg-indigo-600 text-white rounded py-2 w-full text-center font-semibold uppercase hover:bg-indigo-400 cursor-pointer'>Бараа захиалах</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='w-full bg-white rounded-sm'>
                  <div className='border-l border-gray-200 h-full bg-white rounded-sm mt-1'>
                    <div className=''>
                      kk
                    </div>
                  </div>
                </div>

             </div>
            </div>
            
          </div>

          <div className='flex '>
            <div className='bg-white w-full rounded mt-4 '>
              <div className='p-4'>
                <h1 className='text-xl font-semibold'>Сэтгэгдэл бичих</h1>
                <div className='mt-4 border-t'>
                  <h1 className='mt-4 text-ms'>Сэтгэгдэл</h1>
                  <Textarea/>
                  <Button className='w-full mt-4'>Илгээх</Button>
                </div>
              </div>
            </div>
            <div className='bg-white rounded w-full mt-4'>
              <div className='p-4'>
                <h1 className='text-xl font-semibold'>Сэтгэгдлүүд</h1>
                <div className='mt-4 border-t'>
                  <CargoComment/>
                </div>
              </div>
            </div>
          </div>

            {/* map heseg */}
          <div className='my-4'>
            <div>
            <AspectRatio ratio={16 / 9} className='h-96'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
              />
            </AspectRatio>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Detail