// eslint-disable-next-line no-unused-vars
import React from 'react'

function StatCard({ title, value, icon: Icon }) {
  return (
    <div className='bg-white p-6 rounded-xl shadow-sm border border-slate-200'>
     <div className='flex items-center justify-between'>
        <h2 className='text-sm font-medium text-slate-500'>
            {title}
            </h2>
            { Icon &&(
                <div className='p-3 rounded-xl bg-blue-50 text-blue-600'>
                  <Icon size={22}/>

                </div>
            )}

  <p className="text-3xl font-bold text-slate-800 mt-4">
        {value}
      </p>
    </div>
    </div>
  )
}

export default StatCard
