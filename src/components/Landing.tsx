import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import { Flex, Box, Heading, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { Image, VStack, Text, ButtonGroup } from '@chakra-ui/react';
import Details from './pages/Details';
import Layout from './Layout';
import img from '../assets/img/herobg.png';
import './style.css';
import Guest from '../types/Guest';
import { BASE_URL } from '../context/AuthContext';
const Landing: React.FC = () => {
    const [guestList, setGuestList] = useState<Guest[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [loginError, setLoginError] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchGuestList = async () => {
            try {
                // const response = await fetch('http://127.0.0.1:5000/api/guestList');
                const response = await fetch(`${BASE_URL}/api/guestList`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                // Validate attendanceStatus before processing it
                setGuestList(data.map((guest: Guest) => ({
                    ...guest,
                    attendanceStatus: guest.attendanceStatus !== undefined && guest.attendanceStatus !== null
                        ? parseInt(guest.attendanceStatus.toString())
                        : 0
                })));
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchGuestList();
    }, []);

    const handleRSVP = () => {
        setShowModal(true);
    };


    const handleLogin = (firstName: string, lastName: string) => {
        const foundUser = guestList.find(
            user =>
                user.firstName.toLowerCase() === firstName.toLowerCase() &&
                user.lastName.toLowerCase() === lastName.toLowerCase()
        );

        if (foundUser) {
            console.log('Authentication successful');
            if (foundUser.role === 'admin') {
                navigate('/admin');
            } else if (foundUser.attendanceStatus === 1 || foundUser.attendanceStatus === 2) {
                navigate('/schedule');
            } else {
                navigate('/about');
            }
            setLoginError(false);
        } else {
            console.log('Authentication failed');
            setLoginError(true);
        }
    };


    return (
        <div>
            {/* <Flex
                p='2em'
                justifyContent='center'
                alignItems={{ base: 'center', sm: 'start' }}
                w={'full'}
                h={'100vh'}
                backgroundImage={
                    'url(https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/donuts%2Fbg1.png?alt=media&token=02e8d2e8-4b67-48f8-8804-98491c74582d&_gl=1*1aten8f*_ga*NjM0MjE2MzM5LjE2OTg5NDI5MjQ.*_ga_CW55HF8NVT*MTY5ODk4MzA1Ny40LjEuMTY5ODk4MzA2OS40OC4wLjA.)'
                }
                backgroundSize={'cover'}
                backgroundPosition={'center center'}
            >
                <Box className='herobg' h={{ base: '70vh', sm: '30vh' }} pt={{ base: '5em', lg: '10em' }}>
                    <Heading fontSize='5xl' textAlign='center' color='blackAlpha.800'>06.15.2024</Heading>
                    <h1 className='hero-heading'>You're Invited</h1>
                    <Flex justifyContent={{ base: 'center', sm: 'center', md: 'center' }} alignItems='center'>
                        <Button
                            mt='3'
                            size='md'
                            height='40px'
                            width='180px'
                            border='2px'
                            borderColor='white'
                            borderRadius='2px'
                            color='white'
                            bg='#e5e3e033'
                            onClick={handleRSVP}
                        >
                            RSVP
                        </Button>
                    </Flex>
                </Box>
            </Flex> */}
            <Layout>
                <Flex
                    bg="#f8f6f0"
                    align="center"
                    justify="center"
                >
                    <Box
                        width="100%"
                        height={{ base: '100%', lg: '650px' }}
                        display="flex"
                        justifyContent="center"
                    >
                        <Flex width="100%" justifyContent='space-between' flexDir={{ base: 'column', md: 'row', lg: 'row' }}>
                            <Box
                                flex="1"
                                height="100%"
                                w={{ base: '100%', md: '50%', lg: '50%' }}
                                border=".5px solid black"
                            >
                                <Image objectFit="cover"
                                    width="100%"
                                    height="100%" src={img} />
                                <Box position="absolute" top="0" left={{ base: '0%', md: '-50%', lg: '-50%' }} right="0" bottom={{ base: '75%', md: '35%', lg: '50%' }} color='white' display='flex' alignItems='center' justifyContent='center'>
                                    <Heading>Eddie x Christy</Heading>
                                </Box>
                            </Box>
                            <Box
                                flex="1"
                                height="100%"
                                w={{ base: '100%', md: '50%', lg: '50%' }}
                                border=".5px solid black"
                                borderLeftWidth={{ base: '.5px', md: '0' }}
                            >
                                <Box h='100%' p='8' display='flex' alignItems='center' justifyContent='center' position='relative' zIndex='2'>
                                    <VStack spacing='3' maxW='md' alignItems='flex-start'>
                                        <Text textAlign='start'>INFO</Text>
                                        <Heading>About the Wedding</Heading>
                                        <Text>Wedding Page is a perfect website for you. Great option for coaches, bloggers, stylists, photographers, designers or any other creative business owner!</Text>
                                        <ButtonGroup outline='none' spacing='6'>
                                            <Button bg='rgb(23 23 23)' color='white' borderRadius='0' px='10'
                                                _hover={{ bg: 'rgb(0 0 0 / 73%)' }}
                                                _active={{
                                                    bg: '#dddfe2',
                                                    transform: 'scale(0.98)',
                                                    borderColor: '#bec3c9',
                                                }}
                                                onClick={handleRSVP}>RSVP</Button>
                                            <Button borderRadius='0' px='10' bg='rgb(234 227 215)'
                                                _hover={{ bg: 'rgba(219,186,160,1)' }}>Details</Button>
                                        </ButtonGroup>
                                    </VStack>
                                </Box>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
                <Details />
                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Login</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody mb='6'>
                            <LoginForm handleLogin={handleLogin} loginError={loginError} />
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </Layout>

        </div>
    );
};

export default Landing;
