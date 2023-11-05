import React from 'react';
import AdminNav from './AdminNav';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <AdminNav />
            {children}
        </div>
    );
};

export default AdminLayout;