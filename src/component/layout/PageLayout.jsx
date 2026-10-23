// eslint-disable-next-line no-unused-vars
import React from 'react'

import Sidebar from './Sidebar.jsx'
import Navbar from './Navbar.jsx'
import DashboardPage from '../../pages/DashboardPage.jsx'
import StudentsTable from '../dashboard/StudentsTable.jsx'

function PageLayout() {
  return (
    <div className='flex min-h-screen'>
      <Sidebar />
      <main className='flex-1 p-6 bg-slate-50'>
      <Navbar />
      <DashboardPage/>
      < StudentsTable />
      
      </main>
    </div>
  )
}

export default PageLayout
