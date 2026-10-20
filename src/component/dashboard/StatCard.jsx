// eslint-disable-next-line no-unused-vars
import React from 'react'

function StatCard(props) {
  return (
    <div className='bg-white p-6 rounded-xl shadow-sm border border-slate-200'>

        <h2 className='text-sm font-medium text-slate-500'>{props.title }</h2>
        <p className=' text-3xl font-bold text-slate-800 mt-2'>{props.value}</p>
      
    </div>
  )
}

export default StatCard
