import { useState } from 'react';
import { Flex, FormControl, Input, InputGroup, InputLeftAddon, Text, Stack, RadioGroup, Radio, Button, Tooltip } from '@chakra-ui/react';
import { BASE_URL } from '../context/AuthContext';

interface FormProps {
    onFormSubmit: (success: boolean) => void;
}

const Form: React.FC<FormProps> = ({ onFormSubmit }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        attendanceStatus: '1'
    });

    const [submitStatus, setSubmitStatus] = useState<'pending' | 'success' | 'error'>('pending');


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('${BASE_URL}/api/updateGuest', {
                // const response = await fetch('http://127.0.0.1:5000/api/updateGuest', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setSubmitStatus('success');
                onFormSubmit(true);
            } else {
                setSubmitStatus('error');
                // ... further logic upon unsuccessful submission
            }
        } catch (error) {
            setSubmitStatus('error');
            console.error('Form submission error:', error);
            // Handle the error, display an error message, etc.
        }
    };

    return (
        <Flex justifyContent='center'>
            <Stack direction='column' minWidth='350px' py='2em'>
                <FormControl>
                    <Input variant='flushed' placeholder='First Name' name='firstName' value={formData.firstName} onChange={handleChange} />
                </FormControl>
                <FormControl>
                    <Input variant='flushed' placeholder='Last Name' name='lastName' value={formData.lastName} onChange={handleChange} />
                </FormControl>
                <FormControl>
                    <Input variant='flushed' placeholder='Email' name='email' value={formData.email} onChange={handleChange} />
                </FormControl>
                <FormControl>
                    <Input variant='flushed' placeholder='Phone Number' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} />
                </FormControl>
                {/* <FormControl>
                    <InputGroup>
                        <InputLeftAddon children='+234' />
                        <Input type='tel' placeholder='phone number' />
                    </InputGroup>
                </FormControl> */}

                <Text as='b'>Are you attending?</Text>
                <FormControl>
                    <RadioGroup value={formData.attendanceStatus} onChange={val => setFormData({ ...formData, attendanceStatus: val })}>
                        <Stack>
                            <Radio value='1'>Yes, I will be attending.</Radio>
                            <Radio value='2'>No, I will not be attending.</Radio>
                            <Radio value='3'>I'm not sure.</Radio>
                        </Stack>
                    </RadioGroup>
                </FormControl>
                {submitStatus === 'error' && (
                    <Tooltip label='Error submitting the form' placement='right'>
                        <Text color='red'>Error submitting the form</Text>
                    </Tooltip>
                )}
                {submitStatus === 'success' && (
                    <Tooltip label='Form submitted successfully' placement='right'>
                        <Text color='green'>Form submitted successfully</Text>
                    </Tooltip>
                )}
                <Button onClick={handleSubmit}>Submit</Button>
            </Stack>
        </Flex>
    );
};

export default Form;
