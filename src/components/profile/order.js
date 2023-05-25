import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Tooltip } from 'antd';
import { Spinner, useToast } from '@chakra-ui/react';
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
import { BARAA, userorderall, userorderfilteruri } from '@/url/uri';
import axios from 'axios';
import { isAuth } from 'context/AuthContext';
import moment from 'moment'
import OrderDetailModal from './Modals/orderDetail';

const Order = () => {
  const toast = useToast()
  const [route, setRoute] = useState(false);
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadProfile();
  }, [route]);

const loadProfile = async() => {
  setLoading(true)
    try{
        const res = await axios.post(userorderfilteruri, {id: isAuth()?._id, status: route});
        setOrder(res.data.cargo);
        setLoading(false)
    }catch(err){
        console.log(err);
        setLoading(false)
    }
}

  return (
    <div className='w-full'>
      <div className='my-4 mx-2'>
       <h1 className='text-lx font-semibold'>Миний захиалгууд</h1>
      </div>
      <OrderHeader/>

      <div className='flex justify-between flex-wrap'>
        <div className='flex mt-4 xs:text-sm md:text-lg'>
          <div onClick={() => setRoute(false)} className={route== false ?'mx-2 border-b-2 font-semibold pb-2 border-gray-800 cursor-pointer':'mx-2 border-b-2 pb-2 border-gray-100 hover:border-gray-800 hover:font-semibold cursor-pointer'}>
            <h1>Бүгд</h1>
          </div>
          <div onClick={() => setRoute(BARAA.REGISTERED)} className={route==BARAA.REGISTERED?'mx-2 border-b-2 font-semibold pb-2 border-gray-800 cursor-pointer':'mx-2 border-b-2 pb-2 border-gray-100 hover:border-gray-800 hover:font-semibold cursor-pointer'}>
            <h1>Илгээсэн</h1>
          </div>
          <div onClick={() => setRoute(BARAA.APPROVED)} className={route==BARAA.APPROVED?'mx-2 border-b-2 font-semibold pb-2 border-gray-800 cursor-pointer':'mx-2 border-b-2 pb-2 border-gray-100 hover:border-gray-800 hover:font-semibold cursor-pointer'}>
            <h1>Баталгаажсан</h1>
          </div>
          <div onClick={() => setRoute(BARAA.RECEIVED)} className={route==BARAA.RECEIVED?'mx-2 border-b-2 font-semibold pb-2 border-gray-800 cursor-pointer':'mx-2 border-b-2 pb-2 border-gray-100 hover:border-gray-800 hover:font-semibold cursor-pointer'}>
            <h1>Хүлээн авсан</h1>
          </div>
          <div onClick={() => setRoute(BARAA.CAME)} className={route==BARAA.CAME?'mx-2 border-b-2 font-semibold pb-2 border-gray-800 cursor-pointer':'mx-2 border-b-2 pb-2 border-gray-100 hover:border-gray-800 hover:font-semibold cursor-pointer'}>
            <h1>Ирсэн</h1>
          </div>
        </div>

        {/* <div className='mt-4'>
          <select className='rounded px-4 py-1 ring-1 ring-gray-200 outline-none'>
            <option>Сүүлийх нь эхэндээ</option>
            <option>Эхнийх нь сүүлдээ</option>
          </select>
        </div> */}

      </div>

      <div className='bg-white rounded mt-2 w-full'>
        <div className='py-4 mx-4'>
          <div>
             {
              loading ?
              <div className='flex justify-center'>
                <Spinner/>
              </div>
              :
              <div>
                 {
                order.length === 0 ?
                <div className='flex justify-center items-center'>
                  <img src='/../icons/emp.png'/>
                  <h1 className='ml-4 font-semibold opacity-90'>Захиалга байхгүй байна</h1>
                </div>
                :
                <TableContainer>
                <Table variant='simple' size='sm'>
                  <Thead bgColor='gray.100'>
                    <Tr>
                      <Th>Барааны төрөл</Th>
                      <Th>Трак код</Th>
                      <Th>Линк</Th>
                      {/* <Th>Өнгө</Th>
                      <Th>Хэмжээ</Th> */}
                      <Th>Тоо</Th>
                      <Th>Огноо</Th>
                      <Th>төлбөр</Th>
                      <Th></Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {order
                      .map((order, index) => {
                        return(
                        <Tr key={index} fontSize='sm'>
                          <Td>{order.type}</Td>
                          {
                            order?.trackCode ?
                            <Td>{order.trackCode}</Td>
                            :
                            <Td>Код үүсээгүй байна</Td>
                          }
                          <Td>
                            <div className='flex justify-between items-center'>
                              {order.link.slice(0, 18)} ...
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
                          {/* <Td>{order.color}</Td>
                          <Td>{order.size}</Td> */}
                          <Td>{order.number}</Td>
                          <Td>{order.price}</Td>
                          <Td>{moment(order.date).format("L")}</Td>
                          <Td>
                            {
                              order.status === BARAA.REGISTERED&&
                              <div className='bg-gray-400 rounded px-2 py-1 text-sm text-white text-center'>
                                Илгээсэн
                              </div>
                            }
                            {
                              order.status === BARAA.APPROVED&&
                              <div className='bg-amber-400 rounded px-2 py-1 text-sm text-white text-center'>
                                Баталгаажсан
                              </div>
                            }
                            {
                              order.status === BARAA.RECEIVED&&
                              <div className='bg-pink-400 rounded px-2 py-1 text-sm text-white text-center'>
                                Хүлээн авсан
                              </div>
                            }
                            {
                              order.status === BARAA.CAME&&
                              <div className='bg-green-400 rounded px-2 py-1 text-sm text-white text-center'>
                                Ирсэн
                              </div>
                            }
                            {
                              order.status === BARAA.CONFIRM&&
                              <div className='bg-green-400 rounded px-2 py-1 text-sm text-white text-center'>
                                Эзэндээ очсон
                              </div>
                            }
                          </Td>
                          <Td>
                            <OrderDetailModal data={order}/>
                          </Td>
                        </Tr>
                        )
                      })
                    }
                  </Tbody>
                </Table>
              </TableContainer>
              }
              </div>
             }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Order