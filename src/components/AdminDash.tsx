// import React from 'react';
// import AddGuestForm from './AddGuestForm';
// import { Box, Flex } from '@chakra-ui/react'
// import AdminLayout from './AdminLayout';
// import GuestList from './GuestList';

// const AdminDash: React.FC = () => {
//     return (
//         <AdminLayout>
//             <Box w='2xl' h='500px'>
//                 <h1>Welcome, Admin!</h1>
//                 <p>Add a new guest:</p>
//                 <AddGuestForm />
//             </Box>
//             <Flex>
//                 <GuestList />
//             </Flex>
//         </AdminLayout>
//     );
// };

// export default AdminDash;


import React from 'react';
import { Heading, Text, Box, Flex } from '@chakra-ui/react';
import AdminLayout from './AdminLayout';
import AddGuestForm from './AddGuestForm';
import GuestList from './GuestList';

const AdminDash: React.FC = () => {
    return (
        <AdminLayout>
            <Box w='2xl' h='500px'>
                <Heading as="h1" size="xl">Welcome, Admin!</Heading>
                <Text>Add a new guest:</Text>
                <AddGuestForm />
            </Box>
            <Flex>
                <GuestList />
            </Flex>
        </AdminLayout>
    );
};

export default AdminDash;
