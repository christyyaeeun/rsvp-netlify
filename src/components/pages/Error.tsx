import React from 'react';
import {
    Container,
    Stack,
    Box,
    Heading,
    Text,
    Button,
    Image,
    HStack,
} from '@chakra-ui/react';
import { BsArrowLeft } from 'react-icons/bs';
import logo from '../../assets/img/cpluse.png';

const Error: React.FC = () => {
    return (
        <Container id="error-box" minHeight='100vh' h="100%" minWidth="100vw" alignItems='center' justifyContent='center' display='flex' py="3em">
            <Container maxW={'7xl'}>
                <Stack alignItems="center" spacing={{ base: 4, md: 8, lg: 6 }}>
                    <Box px='2'>
                        <Image
                            className="error-text"
                            id="error-img"
                            alt={'Error Image'}
                            fit={'cover'}
                            align={'center'}
                            w={'100%'}
                            h={'100%'}
                            m='0 auto'
                            maxW={{ base: "75%", md: "80%", lg: '100%' }}
                            mb={{ base: '1em', lg: '2em' }}
                            src={logo}
                        />
                        <Text color={'gray.800'} bg='#ffffffbf' textAlign='center'>
                            The page you were looking for isn't available or doesn't exist.
                        </Text>
                    </Box>
                    <Button
                        as="a"
                        href="/"
                        h={10}
                        leftIcon={<BsArrowLeft />}
                        rounded={'full'}
                        size={'lg'}
                        fontWeight={'normal'}
                        color={'white'}
                        bg={'#83acd4'}
                        _hover={{ bg: '#b1cde6' }}>
                        Go Home
                    </Button>
                </Stack>
            </Container>
        </Container>
    );
}

export default Error;
