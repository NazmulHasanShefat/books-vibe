import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import { Toaster } from 'sonner';

const App = () => {
    return (
        <>
          <Toaster />
        <Navbar />
        <Outlet />  
        </>
    );
};

export default App;