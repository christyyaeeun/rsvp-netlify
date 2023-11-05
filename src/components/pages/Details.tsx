import { Flex, Box, VStack, Text, Heading, ButtonGroup, Button, Image } from '@chakra-ui/react';
import { UnorderedList, ListItem, Divider } from '@chakra-ui/react';
import img from '../../assets/img/bg4.jpg';

const Details: React.FC = () => {
    return (
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
                <Flex width="100%" justifyContent='space-between' flexDir={{ base: 'column-reverse', md: 'row', lg: 'row' }}>
                    <Box
                        flex="1"
                        height="100%"
                        w={{ base: '100%', md: '50%', lg: '50%' }}
                        border=".5px solid black"
                        borderTop='0'
                    >
                        <Flex direction='column' alignItems='center' fontFamily='Neuton, serif' p='4' maxW='500px'>
                            <VStack spacing='3' pt='6'>
                                {/* <Heading fontSize='2xl'>Schedule</Heading> */}
                                <Box>
                                    <Heading size='md'>Day 1: Welcome Event</Heading>
                                    <Text fontFamily='Roboto, san-serif' fontWeight='700'>
                                        FRIDAY,
                                        <Text letterSpacing='-1px'>
                                            06.15.2024
                                        </Text>
                                    </Text>
                                    <UnorderedList fontWeight='300'>
                                        <ListItem>A laidback, fancy-free vibe</ListItem>
                                        <ListItem>food + drink</ListItem>
                                    </UnorderedList>
                                </Box>
                                <Divider />
                                <Box>
                                    <Heading size='md'> Day 2: Guest Free Day</Heading>
                                    <Text fontFamily='Roboto, san-serif' fontWeight='700'>
                                        SATURDAY,
                                        <Text letterSpacing='-1px'>
                                            06.16.2024
                                        </Text>
                                    </Text>
                                    <UnorderedList fontWeight='300'>
                                        <ListItem>Rehearsal Dinner for the VIPs only</ListItem>
                                        <ListItem>Dinner and Drinks</ListItem>
                                    </UnorderedList>
                                    <Text>
                                    </Text>
                                </Box>
                                <Divider />
                                <Box>
                                    <Heading size='md'> Day 3: Wedding Day</Heading>
                                    <Text fontFamily='Roboto, san-serif' fontWeight='700'>
                                        SUNDAY,
                                        <Text letterSpacing='-1px'>
                                            06.17.2024
                                        </Text>
                                    </Text>
                                    <UnorderedList fontWeight='300'>
                                        <ListItem>Dinner for the all guests</ListItem>
                                        <ListItem>Dinner and Drinks</ListItem>
                                    </UnorderedList>
                                </Box>
                                <Divider />
                                <Box>
                                    <Heading size='md'> Day 4: Farewell Activity</Heading>
                                    <Text fontFamily='Roboto, san-serif' fontWeight='700'>
                                        MONDAY,
                                        <Text letterSpacing='-1px'>
                                            06.18.2024
                                        </Text>
                                    </Text>
                                    <UnorderedList fontWeight='300'>
                                        <ListItem>Farewell Brunch</ListItem>
                                    </UnorderedList>
                                </Box>
                                <Divider />
                            </VStack>
                        </Flex>
                    </Box>
                    <Box
                        flex="1"
                        height="100%"
                        w={{ base: '100%', md: '50%', lg: '50%' }}
                        border=".5px solid black"
                        borderLeftWidth={{ base: '.5px', md: '0' }}
                        borderTop='0'
                        bg='rgba(234,227,215,1)'
                    >
                        <Image objectFit="cover"
                            width="100%"
                            height="100%" src={img} />

                        <Box position="absolute" top="0" left={{ base: '0%', md: '50%', lg: '50%' }} right="0" bottom={{ base: '-10%', md: '-30%', lg: '-50%' }} color='white' display='flex' alignItems='center' justifyContent='center'>
                            <Heading>Wedding Itinerary</Heading>
                        </Box>


                    </Box>
                </Flex>
            </Box >
        </Flex >
    );
};

export default Details;
