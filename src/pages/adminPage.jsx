import React from 'react';
import { MdOutlineSpaceDashboard, MdOutlineSaveAs } from "react-icons/md";
import { LuMonitorSpeaker } from "react-icons/lu";
import { TbUserSearch } from "react-icons/tb";
import {Routes,Route,Link} from 'react-router-dom'	

const AdminPage = () => {
  return (
    <div className='flex w-full h-screen'>
      {/* Sidebar */}
      <div className='w-[300px] h-full bg-yellow-600 flex flex-col justify-center items-center py-6 gap-8'>
        <Link to="/admin" className='w-[200px] h-[50px] text-[22px] font-semibold flex items-center justify-center gap-3 bg-yellow-100 rounded-lg shadow-md hover:bg-yellow-200 transition'>
          <MdOutlineSpaceDashboard className="text-[28px]" />
          Dashboard
        </Link>
        <Link to="/admin/bookings" className='w-[200px] h-[50px] text-[22px] font-semibold flex items-center justify-center gap-3 bg-yellow-100 rounded-lg shadow-md hover:bg-yellow-200 transition'>
          <MdOutlineSaveAs className="text-[28px]" />
          Bookings
        </Link>
        <Link to="/admin/items" className='w-[200px] h-[50px] text-[22px] font-semibold flex items-center justify-center gap-3 bg-yellow-100 rounded-lg shadow-md hover:bg-yellow-200 transition'>
          <LuMonitorSpeaker className="text-[28px]" />
          Items
        </Link>
        <Link to="/admin/users" className='w-[200px] h-[50px] text-[22px] font-semibold flex items-center justify-center gap-3 bg-yellow-100 rounded-lg shadow-md hover:bg-yellow-200 transition'>
          <TbUserSearch className="text-[28px]" />
          Users
        </Link>
      </div>

      <div className='h-full bg-yellow-100 w-[calc(100vw-300px)]'>
        <Routes path="/*">
            <Route path="/bookings" element={<h1>Bookings</h1>}/>
            <Route path="/items" element={<h1>Items</h1>}/>
            <Route path="/users" element={<h1>Users</h1>}/>
        </Routes>
      </div>
    </div>
  );
};

export default AdminPage;
