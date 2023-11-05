import React, { useState, useContext, FormEvent } from 'react';
import { useAuth } from '../context/AuthContext';
import { Flex, Box, Input, FormLabel, Button } from '@chakra-ui/react';
import Guest from '../types/Guest';

const AddGuestForm: React.FC = () => {
    const [newGuest, setNewGuest] = useState({ firstName: '', lastName: '', role: '', attendanceStatus: 0 });
    const { loggedInUser, addGuest } = useAuth();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewGuest({ ...newGuest, [name]: value });
    };

    const handleAddGuest = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (loggedInUser === 'admin') {
            const result = await addGuest(newGuest as Guest);
            if (result.success) {
                // Handle successful addition, e.g., show success message or redirect
                console.log('Guest added successfully');
            } else {
                // Handle failure, e.g., show an error message
                console.error('Failed to add guest:', result.message);
            }
        } else {
            console.error('Permission denied. Only admin users can add guests.');
        }
    };


    return (
        <Flex direction='row' h='500px'>
            <form onSubmit={handleAddGuest}>
                <FormLabel>
                    First Name:
                    <Input type="text" name="firstName" value={newGuest.firstName} onChange={handleInputChange} />
                </FormLabel>
                <FormLabel>
                    Last Name:
                    <Input type="text" name="lastName" value={newGuest.lastName} onChange={handleInputChange} />
                </FormLabel>
                <FormLabel>
                    Role:
                    <Input type="text" name="role" value={newGuest.role} onChange={handleInputChange} />
                </FormLabel>
                {/* <Select type='text' name='attendanceStatus' value={newGuest.attendanceStatus} onChange={handleInputChange}>
                    <option value='1'>Attending</option>
                    <option value='2'>Not Attending</option>
                    <option value='2'>Not Yet Responded</option>
                </Select> */}
                <Button type="submit">Add Guest</Button>
            </form>
        </Flex>
    );
};

export default AddGuestForm;
