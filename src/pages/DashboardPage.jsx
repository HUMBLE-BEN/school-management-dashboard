// eslint-disable-next-line no-unused-vars
import React from 'react'
import {
  Users,
  UserCheck,
  UserPlus,
  TrendingUp,
} from 'lucide-react';
import StatCard from '../component/dashboard/StatCard'


function DashboardPage() {
  return (

    <div className='flex items-center justify-between  '>

        
     <div className='shadow-lg w-150 h-65  rounded-2xl '>

    <div className='grid grid-cols-2 gap-6'> 
        
        <StatCard  title = "Total Students"value = {1248} icon={Users} />
        <StatCard title = "Active Students"value={900} icon={UserCheck}/>
         <StatCard title = "New Admissions"value={200} icon={UserPlus}/>
        
          <StatCard title = "Attendance Rate"value="96.%" icon={TrendingUp}/>
         
        
        </div>
      
  </div>

        <div className='flex-1 shadow-lg h-65 w-100 bg-gray-300 m-3'> 
            <h2>Attendance Rate</h2>
            <div>
                <p>present <span>2000</span></p>
            </div>

            

        </div>

  </div>
  )
}

export default DashboardPage
