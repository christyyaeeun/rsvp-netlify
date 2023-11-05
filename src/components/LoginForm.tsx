import React, { useState } from 'react';
import { Input, Button, FormLabel, Box, Tooltip } from '@chakra-ui/react';

type LoginFormProps = {
    handleLogin: (firstName: string, lastName: string) => void;
    loginError: boolean;
};

const LoginForm: React.FC<LoginFormProps> = ({ handleLogin, loginError }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleLogin(firstName, lastName);
    };


    return (
        <div>
            {/* <Flex direction='column' align='flex-start' justify='center' w='100%' p='4'> */}
            <form onSubmit={handleSubmit}>
                <Box mb='4'>
                    <FormLabel>First Name</FormLabel>
                    <Input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                </Box>

                <Box mb='4'>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Box>
                {loginError && (
                    <Tooltip label="Invalid credentials" placement="top">
                        <Box display='flex' justifyContent='center'>
                            <p style={{ color: 'red' }}>Login unsuccessful. Please check your credentials.</p>
                        </Box>
                    </Tooltip>
                )}

                <Box display='flex' justifyContent='center' pt='4'>
                    <Button
                        type='submit'
                        size='md'
                        height='40px'
                        width='180px'
                        border='2px'
                        borderColor='white'
                        borderRadius='2px'
                        color='white'
                        bg='black'
                    >Login</Button>
                </Box>
            </form>
            {/* </Flex> */}
        </div>
    );
};

export default LoginForm;
