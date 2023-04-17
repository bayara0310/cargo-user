import React, { useEffect, useState } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer
} from '@chakra-ui/react'
import { Tooltip } from 'antd';
import { AiFillDelete } from 'react-icons/ai';
import axios from 'axios';
import { commentUserFindUri } from '@/url/uri';
import { isAuth } from 'context/AuthContext';
import moment from 'moment';

const Comments = () => {
  const text = "https://www.amazon.com/s/ref=sbl_swt_0_0?k=Gaming+headsets+with+microphone&pd_rd_w=MZI6u&content-id=amzn1.sym.642826b6-ec15-4780-9b09-8199fa7d0216:amzn1.sym.642826b6-ec15-4780-9b09-8199fa7d0216&pf_rd_p=642826b6-ec15-4780-9b09-8199fa7d0216&pf_rd_r=X7CYCQD5MQPW5JPVKYR6&pd_rd_wg=RqOI3&pd_rd_r=73225477-1f71-4fd6-baa2-78d3fc5305aa&qid=1678936051"; 
  const result = text.slice(0, 70);

  const [user, setUser] = useState([]);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async() => {
    try{
      const res = await axios.get(commentUserFindUri + isAuth()._id);
      setUser(res.data.user)
      console.log(res.data)
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className=''>
      <div className='my-4 mx-2'>
       <h1 className='text-lx font-semibold'>Миний сэтгэгдлүүд</h1>
      </div>
      <div className='bg-white rounded mt-2'>
        <div>
        <div className='py-4 mx-4'>
              <TableContainer>
                <Table variant='simple' size='sm'>
                  <Thead bgColor='gray.100'>
                    <Tr>
                      <Th>Бичсэн сэтгэгдэл</Th>
                      <Th>Огноо</Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {
                      user.map((item, index) => {
                        return(
                          <Tr key={index}>
                            <Tooltip title={item.comment} color='gray'>
                                <Td>{item.comment.slice(0, 70)}...</Td>
                            </Tooltip>
                            <Td>{moment(item.createdAt).format("L")}</Td>
                            <Td>
                              <AiFillDelete className='cursor-pointer' color='red' size={18}/>
                            </Td>
                          </Tr>
                        )
                      })
                    }
                  </Tbody>
                </Table>
              </TableContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comments