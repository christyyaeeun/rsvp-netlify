import React, { useState } from 'react';
import Form from './Form';
import { Box, Flex, Heading } from "@chakra-ui/react";

const Rsvp = () => {
    const [displaySuccess, setDisplaySuccess] = useState(false);

    const handleFormSubmit = (success: boolean) => {
        setDisplaySuccess(success);
    };

    return (
        <div>
            <Heading textAlign='center'>Soft RSVP</Heading>
            <Flex justifyContent='center'>
                <Box maxW='3xl'>
                    {!displaySuccess && (
                        <Form onFormSubmit={handleFormSubmit} />
                    )}
                    {displaySuccess && (
                        <Box>
                            <Heading as='h2' size='md' textAlign='center' mt={5}>
                                We can't wait to see you!
                            </Heading>
                        </Box>
                    )}
                </Box>
            </Flex>
        </div>
    );
};

export default Rsvp;
