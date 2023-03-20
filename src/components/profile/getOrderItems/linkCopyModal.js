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


const LinkCopy = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
        <div onClick={onOpen} className='text-sm bg-gray-100 rounded py-1 px-4 cursor-pointer hover:bg-gray-300'>Линк хуулах заавар үзэх</div>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                sss
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
                </Button>
                <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    </div>
  )
}

export default LinkCopy