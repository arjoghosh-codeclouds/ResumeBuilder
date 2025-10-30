import React, { useContext } from 'react'
import { UserContext } from '../context/userContext';
import Navbar from './Navbar';
import Footer from './Footer';

const DashboardLayout = ({ children }) => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Navbar  />
      {user && <div className='container mx-auto pt-4 pb-4'>{children}</div>}
      {!user && <div className="text-center text-red-500">Please log in to access the dashboard.</div>}
      <Footer/>
    </div>
    
  );
};

export default DashboardLayout;
