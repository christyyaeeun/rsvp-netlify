import React, { useState } from 'react';
import { Flex, Box, Heading, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import LoginForm from '../../components/LoginForm';
import Guest from '../../types/Guest';

interface LandingProps {
    handleRSVP: () => void;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    handleLogin: (firstName: string, lastName: string) => void;
    loginError: boolean;
}

const Landing: React.FC<LandingProps> = ({ handleRSVP, showModal, setShowModal, handleLogin, loginError }) => {
    return (
        <div>
            <Flex
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
            </Flex>

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
        </div>
    );
};

export default Landing;
