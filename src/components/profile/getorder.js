import React from 'react'
import { message, Steps, theme } from 'antd';
import { useState } from 'react';
import { Button, Input } from '@chakra-ui/react';
import LinkCopy from './getOrderItems/linkCopyModal';
const steps = [
  {
    title: 'Барааны ерөнхий мэдээлэл',
  },
  {
    title: 'Үнэ, хэмжээ',
  },
  {
    title: 'Төлбөр',
  },
];

const Getorder = () => {
    const [current, setCurrent] = useState(0);

    const next = () => {
      setCurrent(current + 1);
    };
    const prev = () => {
      setCurrent(current - 1);
    };

    const items = steps.map((item) => ({
      key: item.title,
      title: item.title,
    }));

  return (
    <div className=''>
        <h1 className='text-lx font-semibold mb-4'>Захиалга өгөх</h1>
        <div className='p-4 bg-white rounded'>
          <>
            <Steps current={current} items={items} />
            <div className='mt-8 mb-20'>
                {
                    current==0&&
                    <div className='mt-4 md:mx-20 xs:mx-4'>
                        <div>
                            <h1 className='text-lg mt-2'>Барааны төрөл</h1>
                            <Input className='mt-1' placeholder='Цамц, өмд, усны сав гэх мэт ...'/>
                        </div>
                        <div className='mt-2'>
                            <div className='flex justify-between items-center'>
                               <h1 className='text-lg mt-2'>Барааны линк</h1>
                               <LinkCopy/>
                            </div>
                            <Input className='mt-1' placeholder='Өөрийн захиалга хийж байгаа сайтын линкийг хуулж оруулах'/>
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-lg mt-2'>Барааны тоо ширхэг</h1>
                            <Input className='mt-1' placeholder='Тухайн барааны тоо ширхэг'/>
                        </div>
                    </div>
                }
                {
                    current==1&&
                    <div className='mt-4 md:mx-20 xs:mx-4'>
                        <div>
                            <h1 className='text-lg mt-2'>Барааны Өнгө</h1>
                            <Input className='mt-1' placeholder='Улаан, хар гэх мэт ...'/>
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-lg mt-2'>Барааны Хэмжээ</h1>
                            <Input className='mt-1' placeholder='XXL, 2m  гэх мэт ...'/>
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-lg mt-2'>Барааны нэгж үнэ</h1>
                            <Input className='mt-1' placeholder='Тухайн барааны тоо ширхэг'/>
                        </div>
                    </div>
                }
                {
                    current==2&&
                    <div className='mt-4 md:mx-20 xs:mx-4'>
                        <div className='mt-4'>
                            <h1 className='text-lg mt-2'>Барааны нэгж үнэ</h1>
                            <Input className='mt-1' placeholder='Нэг бараа авах үнийг оруулна уу !'/>
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-lg mt-2'>Карго сонгох</h1>
                            <select className='w-full rounded outline-none ring-1 py-2 text-sm mt-1'>
                                <option>Сонгох</option>
                                <option>ss</option>
                            </select>
                        </div>
                    </div>
                }
                
            </div>
            <div
            className=''
                style={{
                marginTop: 24,
                }}
            >
                {current < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                    Дараагийх
                </Button>
                )}
                {current === steps.length - 1 && (
                <Button type="primary" onClick={() => message.success('Захиалга үүслээ та и-мейл хаягаа шалгана уу !')}>
                    Захиалга үүсгэх
                </Button>
                )}
                {current > 0 && (
                <Button
                    style={{
                    margin: '0 8px',
                    }}
                    onClick={() => prev()}
                >
                    Буцах
                </Button>
                )}
            </div>
            </>
        </div>
    </div>
  )
}

export default Getorder