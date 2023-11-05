import { Flex, Box, VStack, Text, Heading, ButtonGroup, Button, Image } from '@chakra-ui/react';
import Details from './Details';
import img from '../../assets/img/herobg.png';
import Layout from '../../components/Layout';
const About: React.FC = () => {
    return (
        <div>
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
                                <Box h='100%' p='8' display='flex' alignItems='center' justifyContent='center'>
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
                                                }}>RSVP</Button>
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
            </Layout>
        </div>
    );
};

export default About;
