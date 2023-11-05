import React from 'react';
import Nav from './Nav';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Nav />
            {children}
        </div>
    );
};

export default Layout;
// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Nav from './Nav';

// const Layout = () => {
//     return (
//         <div>
//             <Nav />
//             <Outlet /> {/* Renders child routes */}
//         </div>
//     );
// };

// export default Layout;
