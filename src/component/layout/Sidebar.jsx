/* eslint-disable no-unused-vars */
import React from 'react'
import { LayoutDashboard, Users, Settings } from 'lucide-react';
  
function Sidebar() {
  return (
    
   <aside className='text-white bg-slate-900 min-h-screen w-64  p-6'>
        <h2 className='text-2xl font-bold mb-2'>
            EduManage
        </h2>
        <p className='text-slate-400'>Student Management</p>
        <nav className='mt-8'>
            <ul>
                <li className='mb-4'>
                    <a href='#' className='flex items-center bg-blue-500 px-3 py-2 rounded-lg space-x-2 hover:bg-blue-600'>
                        <LayoutDashboard />
                        <span>Dashboard</span>
                    </a>
                </li>
                <li className='mb-4'> 
                    <a href='#' className='flex items-center px-3 py-2 rounded-lg space-x-2 hover:bg-slate-800'>
                        <Users />
                        <span>Students</span>
                    </a>
                </li>
                <li className='mb-4'>
                    <a href='#' className='flex items-center px-3 py-2 rounded-lg space-x-2 hover:bg-slate-800'>
                        <Settings />
                        <span>Settings</span>
                    </a>
                </li>
            </ul>
        </nav>
    </aside>
      
    
  )
}

export default Sidebar
