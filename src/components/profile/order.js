import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Tooltip } from 'antd';
import { useToast } from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer
} from '@chakra-ui/react'
import OrderHeader from './orderitems/orderheader'

const Order = () => {
  const toast = useToast()
  const [route, setRoute] = useState(1);

  const text = "https://www.amazon.com/s/ref=sbl_swt_0_0?k=Gaming+headsets+with+microphone&pd_rd_w=MZI6u&content-id=amzn1.sym.642826b6-ec15-4780-9b09-8199fa7d0216:amzn1.sym.642826b6-ec15-4780-9b09-8199fa7d0216&pf_rd_p=642826b6-ec15-4780-9b09-8199fa7d0216&pf_rd_r=X7CYCQD5MQPW5JPVKYR6&pd_rd_wg=RqOI3&pd_rd_r=73225477-1f71-4fd6-baa2-78d3fc5305aa&qid=1678936051"; 
  const result = text.slice(0, 18);
  return (
    <div className='w-full'>
      <div className='my-4 mx-2'>
       <h1 className='text-lx font-semibold'>Миний захиалгууд</h1>
      </div>
      <OrderHeader/>

      <div className='flex justify-between flex-wrap'>
        <div className='flex mt-4'>
          <div onClick={() => setRoute(1)} className={route==1?'mx-2 border-b-2 font-semibold pb-2 border-gray-800 cursor-pointer':'mx-2 border-b-2 pb-2 border-gray-100 hover:border-gray-800 hover:font-semibold cursor-pointer'}>
            <h1>Бүгд</h1>
          </div>
          <div onClick={() => setRoute(2)} className={route==2?'mx-2 border-b-2 font-semibold pb-2 border-gray-800 cursor-pointer':'mx-2 border-b-2 pb-2 border-gray-100 hover:border-gray-800 hover:font-semibold cursor-pointer'}>
            <h1>Илгээсэн</h1>
          </div>
          <div onClick={() => setRoute(3)} className={route==3?'mx-2 border-b-2 font-semibold pb-2 border-gray-800 cursor-pointer':'mx-2 border-b-2 pb-2 border-gray-100 hover:border-gray-800 hover:font-semibold cursor-pointer'}>
            <h1>Баталгаажсан</h1>
          </div>
          <div onClick={() => setRoute(4)} className={route==4?'mx-2 border-b-2 font-semibold pb-2 border-gray-800 cursor-pointer':'mx-2 border-b-2 pb-2 border-gray-100 hover:border-gray-800 hover:font-semibold cursor-pointer'}>
            <h1>Хүлээн авсан</h1>
          </div>
          <div onClick={() => setRoute(5)} className={route==5?'mx-2 border-b-2 font-semibold pb-2 border-gray-800 cursor-pointer':'mx-2 border-b-2 pb-2 border-gray-100 hover:border-gray-800 hover:font-semibold cursor-pointer'}>
            <h1>Ирсэн</h1>
          </div>
        </div>

        <div className='mt-4'>
          <select className='rounded px-4 py-1 ring-1 ring-gray-200 outline-none'>
            <option>Сүүлийх нь эхэндээ</option>
            <option>kk</option>
            <option>kk</option>
          </select>
        </div>

      </div>

      <div className='bg-white rounded mt-2 w-full'>
        <div className='py-4 mx-4'>
          <div>
              <TableContainer>
                <Table variant='simple' size='sm'>
                  <Thead bgColor='gray.100'>
                    <Tr>
                      <Th>Барааны төрөл</Th>
                      <Th>Линк</Th>
                      <Th>Өнгө</Th>
                      <Th>Хэмжээ</Th>
                      <Th>Тоо ширхэг</Th>
                      <Th>Үнэ</Th>
                      <Th>Огноо</Th>
                      <Th>төлбөр</Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Цамц</Td>
                      <Td>
                        <div className='flex justify-between items-center'>
                        {result}...
                        <div
                         onClick={() =>
                          toast({
                            title: 'Линкийг хууллаа',
                            description: "E_CARGO -г сонгодогт баярлалаа.",
                            status: 'success',
                            duration: 5000,
                            isClosable: true,
                          })
                        }
                         className='bg-gray-100 rounded-sm py-1 px-2 cursor-pointer hover:bg-gray-300'>
                          <Tooltip title='Барааны линкийг хуулах' color='indigo'>
                            {/* <CopyToClipboard text={text}> */}
                              <div className=''>хуулах</div>
                            {/* </CopyToClipboard> */}
                          </Tooltip>
                        </div>
                        </div>
                        
                      </Td>
                      <Td>Хар</Td>
                      <Td>xxl</Td>
                      <Td>10</Td>
                      <Td>25</Td>
                      <Td>2023/1010</Td>
                      <Td>25.000</Td>
                      <Td>
                        <div className='bg-green-600 rounded px-2 py-1 text-sm text-white text-center'>
                          Ирсэн
                        </div>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Order