import React, { useState, useEffect } from 'react';
import Guest from '../types/Guest';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { BASE_URL } from '../context/AuthContext';

// const getStatusText = (status: number | null): string => {
//     switch (status) {
//         case 1:
//             return 'Yes';
//         case 2:
//             return 'No';
//         case 3:
//             return 'Maybe';
//         default:
//             return 'Unopened';
//     }
// };



// useEffect(() => {
//     const fetchGuestList = async () => {
//         try {
//             const response = await fetch('http://127.0.0.1:5000/api/guestList');
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await response.json();
//             setGuests(data.map((guest: Guest) => ({
//                 ...guest,
//                 attendanceStatus: guest.attendanceStatus !== null ? parseInt(guest.attendanceStatus) : 0
//             })));
//         } catch (error) {
//             console.error('Fetch error:', error);
//         }
//     };

//     fetchGuestList();
// }, []);

const GuestList: React.FC = () => {
    const [guests, setGuests] = useState<Guest[]>([]);
    useEffect(() => {
        const fetchGuestList = async () => {
            try {
                const response = await fetch('${BASE_URL}/api/guestList');

                // const response = await fetch('http://127.0.0.1:5000/api/guestList');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setGuests(data.map((guest: Guest) => ({
                    ...guest,
                    attendanceStatus: guest.attendanceStatus !== null && guest.attendanceStatus !== undefined
                        ? parseInt(guest.attendanceStatus.toString())
                        : 0
                })));
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchGuestList();
    }, []);


    return (
        <Table variant="simple">
            <Thead>
                <Tr>
                    <Th>First Name</Th>
                    <Th>Last Name</Th>
                    <Th>Role</Th>
                    <Th>Attendance Status</Th>
                    {/* Add more headers for additional guest properties */}
                </Tr>
            </Thead>
            <Tbody>
                {guests.map((guest, index) => (
                    <Tr key={index}>
                        <Td>{guest.firstName}</Td>
                        <Td>{guest.lastName}</Td>
                        <Td>{guest.role}</Td>
                        <Td>{guest.attendanceStatus}</Td>
                        {/* <Td>{getStatusText(guest.attendanceStatus)}</Td> */}
                        {/* Add more table data for additional guest properties */}
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};

export default GuestList;