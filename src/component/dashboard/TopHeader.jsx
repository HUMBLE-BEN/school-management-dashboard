import  { useState } from 'react'
import nigeriaFlag from '../../assets/nigeria-flag.jpg'
import { Moon, Sun, Bell } from 'lucide-react'
import mylogo from '../../assets/mylogo.png'

function TopHeader() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className="flex items-center gap-4 shadow-lg bg-white px-4">
      <img src={mylogo} alt="Logo" className="h-20 w-auto" />

      <div className="px-20">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 max-w-md px-4 py-2 border border-gray-300 rounded-3xl"
        />
      </div>

      <div className="ml-auto flex items-center gap-4">
        <button
          type="button"
          onClick={() => setIsDark((prev) => !prev)}
          aria-label="Toggle dark mode"
          className="p-2 rounded-full hover:bg-gray-100"
        >
          {isDark ? <Sun size={22} /> : <Moon size={22} />}
        </button>

        <button
          type="button"
          aria-label="Notifications"
          className="relative p-2 rounded-full hover:bg-gray-100"
        >
          <Bell size={22} />
          <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-red-500" />
        </button>

        <img
          src={nigeriaFlag}
          alt="Nigeria flag"
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
    </div>
  )
}

export default TopHeader
