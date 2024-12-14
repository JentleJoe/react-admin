import { LightModeOutlined, DarkModeOutlined, NotificationsOutlined, SettingsOutlined, PersonOutline, SearchSharp } from "@mui/icons-material"
import { useTheme } from "../../theme/ThemeContext"
import { MenuOutlined } from "@mui/icons-material"

const Topbar = ({ showSidebar, toggleShowSidebar }) => {
  const { theme, isDarkMode, toggleTheme } = useTheme()

  return (
    <div className={`flex justify-between md:items-center w-full h-min `}>
      <div className="flex items-start">
        <div className="md:hidden mr-4" onClick={toggleShowSidebar}>
          <MenuOutlined className={`cursor-pointer`} />
        </div>
        <div className={`topleft `}>
          <div className={`search-bx flex items-center justify-center p-2
            ${ theme.searchboxBg } flex item-center md:rounded-sm
            rounded-md`}>
            <input type="text" className={`md:w-[150px] w-[100px] text-sm ${ theme.text }
            border-none bg-transparent outline-none `} placeholder="Search" />
            <div className="">
              <SearchSharp className={` ${ theme.text } `} />
            </div>
          </div>
        </div>
      </div>
      <div className={`max-md:hidden topright`}>
        {
          isDarkMode ?
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
      <div className="md:hidden">
      {
        isDarkMode ?
        <div className={`hover:bg-slate-600 rounded-full flex items-center justify-center p-1 cursor-pointer`}>
          <DarkModeOutlined onClick={toggleTheme} className={`text-white`} />
        </div>
        :
        <div className={`hover:bg-slate-300 rounded-full flex items-center justify-center p-1 cursor-pointer`}>
          <LightModeOutlined onClick={toggleTheme} className={`text-gray-700`} />
        </div>
      }
      </div>
    </div>
  )
}

export default Topbar