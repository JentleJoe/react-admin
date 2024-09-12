import { useState } from "react"
import { LightModeOutlined, DarkModeOutlined, NotificationsOutlined, SettingsOutlined,
  PersonOutline, SearchSharp
 } from "@mui/icons-material"

const Topbar = () => {
  const [theme, setTheme] = useState("dark")
  const toggleTheme = () => {
    setTheme(prev => (
      prev === 'dark' ? 'light' : 'dark'
    ))
  }

  return (
    <div className={`flex justify-between items-center w-full h-min ${theme === 'dark' && 'bg-slate-800'} p-4 `}>
      <div className={`topleft `}>
        <div className={`search-bx flex items-center justify-center p-2 ${ theme === 'dark' ? 'bg-slate-700' : 'bg-[rgba(0,0,0,0.1)]' } flex justify-between item-center w-[200px] rounded-sm`}>
          <p className={` text-sm  ${ theme === 'dark' ? 'text-gray-300' : 'text-gray-800' } `}>Search</p>
          <SearchSharp className={` ${ theme === 'dark' ? 'text-gray-300' : 'text-gray-800' }  `} />
        </div>
      </div>
      <div className={`topright`}>
        {
          theme === 'dark' ?
          <div className={`grid grid-flow-col sm:gap-3 gap-2`}>
            <div className={`hover:bg-slate-600 rounded-full flex items-center justify-center p-1 cursor-pointer`}>
              <DarkModeOutlined onClick={toggleTheme} className={`text-white`} />
            </div>
            <div className={`hover:bg-slate-600 rounded-full flex items-center justify-center p-1 cursor-pointer`}>
              <NotificationsOutlined className={`text-white`} />
            </div>
            <div className={`hover:bg-slate-600 rounded-full flex items-center justify-center p-1 cursor-pointer`}>
              <SettingsOutlined className={`text-white`}/>
            </div>
            <div className={`hover:bg-slate-600 rounded-full flex items-center justify-center p-1 cursor-pointer`}>
              <PersonOutline className={`text-white`}/>
            </div>
          </div>
          :
          <div className={`grid grid-flow-col sm:gap-3 gap-2`}>
            <div className={`hover:bg-slate-300 rounded-full flex items-center justify-center p-1 cursor-pointer`}>
              <LightModeOutlined onClick={toggleTheme} className={`text-gray-700`} />
            </div>
            <div className={`hover:bg-slate-300 rounded-full flex items-center justify-center p-1 cursor-pointer`}>
              <NotificationsOutlined className={`text-gray-700`} />
            </div>
            <div className={`hover:bg-slate-300 rounded-full flex items-center justify-center p-1 cursor-pointer`}>
              <SettingsOutlined className={`text-gray-700`} />
            </div>
            <div className={`hover:bg-slate-300 rounded-full flex items-center justify-center p-1 cursor-pointer`}>
              <PersonOutline className={`text-gray-700`} />
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Topbar