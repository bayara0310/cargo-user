import React from 'react'
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

const Comments = () => {
  const text = "https://www.amazon.com/s/ref=sbl_swt_0_0?k=Gaming+headsets+with+microphone&pd_rd_w=MZI6u&content-id=amzn1.sym.642826b6-ec15-4780-9b09-8199fa7d0216:amzn1.sym.642826b6-ec15-4780-9b09-8199fa7d0216&pf_rd_p=642826b6-ec15-4780-9b09-8199fa7d0216&pf_rd_r=X7CYCQD5MQPW5JPVKYR6&pd_rd_wg=RqOI3&pd_rd_r=73225477-1f71-4fd6-baa2-78d3fc5305aa&qid=1678936051"; 
  const result = text.slice(0, 70);

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
                      <Th>Карго</Th>
                      <Th>Бичсэн сэтгэгдэл</Th>
                      <Th>Огноо</Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                    <Td>Аригун карго</Td>
                      <Tooltip title={text} color='gray'>
                          <Td>{result}...</Td>
                      </Tooltip>
                      <Td>2023/10/23</Td>
                      <Td>
                        <AiFillDelete color='red' size={18}/>
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

export default Comments