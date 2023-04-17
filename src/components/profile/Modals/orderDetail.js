import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
  } from '@chakra-ui/react'
import { FiMoreHorizontal } from 'react-icons/fi'
import moment from 'moment'

const OrderDetailModal = ({data}) => {
    console.log(data, "hha")
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
          <FiMoreHorizontal onClick={onOpen} className='cursor-pointer hover:bg-gray-200 rounded-full'/>
    
          <Modal size='2xl' isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Барааны дэлгэрэнгүй мэдээлэл</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <div>
                    {
                        data.image&&
                        <div className='mt-4'>
                            <h1 className='text-sm font-semibold mb-2'>Хүлээн авсан зураг *</h1>
                            <img src={data.image}/>
                        </div>
                    }
                    <div className='mt-4'>
                        <h1 className='text-sm font-semibold mb-2'>Барааны төрөл *</h1>
                        <p className='text-sm'>{data.type}</p>
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-sm font-semibold mb-2'>Линк *</h1>
                        <p className='text-sm'>{data.link}</p>
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-sm font-semibold mb-2'>Өнгө *</h1>
                        <p className='text-sm'>{data.color}</p>
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-sm font-semibold mb-2'>Хэмжээ *</h1>
                        <p className='text-sm'>{data.size}</p>
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-sm font-semibold mb-2'> Тоо ширхэг *</h1>
                        <p className='text-sm'>{data.number}</p>
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-sm font-semibold mb-2'> Нэгж үнэ *</h1>
                        <p className='text-sm'>{data.price}</p>
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-sm font-semibold mb-2'> Нийт үнэ *</h1>
                        <p className='text-sm'>{data.price * data.number}</p>
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-sm font-semibold mb-2'> Төлбөр *</h1>
                        {
                            data.invoice?
                            <p className='text-sm'>{data.invoice}</p>
                            :
                            <p className='text-sm'>Таны барааг карго хүлээн авсан тохиолдолд төлбөрийн мэдээлэл харагдана.</p>
                        }
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-sm font-semibold mb-2'> Огноо *</h1>
                        <p className='text-sm'>{moment(data.date).format("LTS L")}</p>
                    </div>
                </div>
              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                  Гарах
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
    )
}

export default OrderDetailModal