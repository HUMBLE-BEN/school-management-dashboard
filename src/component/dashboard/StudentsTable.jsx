/* eslint-disable no-unused-vars */
import React from 'react'

function StudentsTable() {
  const users = [
    { id: 1, Student: 'Ada', StudentID: '001',Course: "accounting & finance",Status:"active"},
     { id: 2, Student: 'Benson', StudentID: '002',Course: "computer science",Status:"active"},
      { id: 3, Student: 'Amaka', StudentID: '003',Course: "Law",Status:"inactive"},
       { id: 4, Student: 'Tunde', StudentID: '004',Course: "accounting & finance",Status:"active"},
        { id: 5, Student: 'jackson', StudentID: '005',Course: "Accounting",Status:"inactive"},
         { id: 6, Student: 'Anta', StudentID: '006',Course: "banking & finance",Status:"active"},
          { id: 7, Student: 'Adeshola', StudentID: '007',Course: "ecnomies",Status:"inactive"},
           { id: 8, Student: 'udo', StudentID: '008',Course: "accounting & finance",Status:"active"},
            { id: 9, Student: 'Adaku', StudentID: '009',Course: "finance",Status:"inactive"}

    
   
  ]

  return (
    <div className=''>
        <h2 className='flex items-center justify-center font-medium mt-4'>Recents Students</h2>
    <table className="w-full border-collapse text-left ">
      <thead>
        <tr className="bg-gray-800 text-white">
          <th className="p-2">Student</th>
          <th className="p-2">StudentID</th>
          <th className='p-2'>Course</th>
          <th className='p-2'>Status</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="border-b hover:bg-gray-100">
            <td className="p-2">{user.Student}</td>
            <td className="p-2">{user.StudentID}</td>
            <td className='p-2'>{user.Course}</td>
            
            <td className="p-2">
  <span
    className={` px-3 py-1 rounded-full text-xs font-medium ${
      user.Status === 'active'
        ? 'bg-green-100 text-green-700'
        : 'bg-red-100 text-red-700'
    }`}
   
  >
    {user.Status}
  </span>
</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default StudentsTable
