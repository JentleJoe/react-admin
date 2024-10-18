import { LightModeOutlined, DarkModeOutlined, NotificationsOutlined, SettingsOutlined, PersonOutline, SearchSharp } from "@mui/icons-material"
import { useTheme } from "../../theme/ThemeContext"

const Topbar = () => {
  const { theme, isDarkMode, toggleTheme } = useTheme()

  return (
    <div className={`flex justify-between items-center w-full h-min `}>
      <div className={`topleft `}>
        <div className={`search-bx flex items-center justify-center p-2 ${ theme.searchboxBg } flex justify-between item-center w-[200px] rounded-sm`}>
            <input type="text" className={` text-sm  ${ theme.text } border-none bg-transparent outline-none `} placeholder="Search" />
          <SearchSharp className={` ${ theme.text }  `} />
        </div>
      </div>
      <div className={`topright`}>
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
    </div>
  )
}

export default Topbar