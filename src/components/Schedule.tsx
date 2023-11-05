import { Box, Text, Heading, Flex, UnorderedList, ListItem, VStack, Divider } from '@chakra-ui/react';
import Nav from './Nav';

const Schedule = () => {
    return (
        <div>
            <Nav />
            <Box maxW='960' p='6'>
                <Flex direction='column' alignItems='flex-start' fontFamily='Neuton, serif' p='4' maxW='500px'>
                    <VStack spacing='3'>
                        <Heading fontSize='2xl'>Schedule</Heading>
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
        </div >
    );
}

export default Schedule;