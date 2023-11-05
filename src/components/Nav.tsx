import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Link, Image, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, Flex, Box, Icon } from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai'
import logo from '../assets/img/cpluse.png';

const Nav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate();
    const btnRef = React.useRef<HTMLButtonElement | null>(null); // Initialize the ref
    const handleNavigateToHome = () => {
        navigate('/admin');
        onClose();
    };

    const handleNavigateToSchedule = () => {
        navigate('/schedule');
        onClose();
    };
    return (
        <>
            <Box bg='#f0eee7' borderBottom='1px solid gray' position='relative' zIndex='2'>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'} minH={'60px'}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    borderBottom={1}
                    borderStyle={'solid'}
                    borderColor='gray.200'>
                    <button className='nav-icon' ref={btnRef} onClick={onOpen}>
                        <Icon as={AiOutlineMenu} />
                    </button>

                    <Image h='100%' w='200px' src={logo} />
                </Flex>
            </Box>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Box>
                            <Link onClick={handleNavigateToHome}>Home</Link>
                        </Box>
                        <Box mt={4}>
                            <Link onClick={handleNavigateToSchedule}>Schedule</Link>
                        </Box>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
export default Nav;