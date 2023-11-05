import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNav from './AdminNav';

// const AdminLayout = () => {
//     return (
//         <div>
//             <AdminNav />
//             <Outlet /> {/* Renders child routes */}
//         </div>
//     );
// };

// export default AdminLayout;

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <AdminNav />
            {children}
        </div>
    );
};

export default AdminLayout;