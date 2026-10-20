// eslint-disable-next-line no-unused-vars
import React from 'react'
import StatCard from '../component/dashboard/StatCard'

function DashboardPage() {
  return (
     
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 '>
        
        <StatCard title = "Total Students"value = {1248}/>
        <StatCard title = "Active Students"value={900}/>
         <StatCard title = "New Admissions"value={200}/>
          <StatCard title = "Attendance Rate"value="96.%"/>
         
        
        
      
    </div>
  )
}

export default DashboardPage
