import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Drawer from '../../Shared/Drawer/Drawer';

const AdminDashboard = () => {
    return (
        <div>
            <Navbar></Navbar>

            <Drawer>
                <Outlet></Outlet>
            </Drawer>

            <Footer></Footer>
        </div>
    );
};

export default AdminDashboard;