import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'

const HomeComp = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className='sm:block md:container'>
        <div className='flex flex-wrap my-10 items-center xs:mx-8 md:mx-0 justify-between'>
            <div className='sm:w-full xl:w-2/5'>
                <h1 className='text-3xl'>E- CARGO -д тавтай морилно уу</h1>
                <div className='border w-20 mt-2 border-indigo-600'></div>
                <p className='mt-4 text-lg'>Монголын бүх карго -г нэгтгэсэн e-cargo.mn нд тавтай морилно уу. Та манай системээр дамжуулан дэлхийн аль ч орноос бараа бүтээгдэхүүнээ 
                    хамгийн найдвартайгаар захиалан аваарай.
                </p>
                <div className='flex items-center mt-6'>
                    <Link href='/auth/signup'>
                        <Button className='bg-indigo-600 text-white px-20 uppercase text-lg rounded-2xl h-12 mr-4'>
                            Бүртгүүлэх
                        </Button>
                    </Link>
                    <Button className='rounded-full h-10' onClick={onOpen}>
                        <div className=''>
                            <BsFillPlayFill className=''/>
                        </div>
                    </Button>
                </div>
            </div>
            <div className=''>
                <img className='' src='/../../background/home1.png'/>
            </div>
            <>
                <Modal isOpen={isOpen} onClose={onClose} size='5xl'>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Танилцуулга</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div> 
                            <iframe className='w-full' height='600' src="https://www.youtube.com/embed/ZGE_24A3K8Q" title="Ulaanbaatar, Mongolia 🇲🇳 | 4K Drone Footage" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
        </div>
    </div>
  )
}

export default HomeComp