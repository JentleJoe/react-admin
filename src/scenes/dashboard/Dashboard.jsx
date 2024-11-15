import { Header } from "../../components"
import { useTheme } from "../../theme/ThemeContext"
import { DownloadOutlined } from "@mui/icons-material"

const Dashboard = () => {
  const { theme, isDarkMode } = useTheme()

  const colors = theme.palette

  return (
    <div>
      <div className="flex items-center justify-between">
        <Header title="DASHBOARD" subtitle='Welcome to Your Dashboard' />
        <button className={`flex items-center gap-[10px] border rounded-sm text-sm font-bold px-5 py-[10px] `}>
          <DownloadOutlined />
          Dowload Reports
        </button>
      </div>
      <div className="grid sm:grid-cols-6 lg:grid-cols-12 gap-5 auto-rows-fr  ">
        <div className="sm:col-span-3 border min-h-[140px] "></div>
        <div className="sm:col-span-3 border "></div>
        <div className="sm:col-span-3 border "></div>
        <div className="sm:col-span-3 border "></div>
        <div className="sm:col-span-6 lg:col-span-8 row-span-2 border "></div>
        <div className="sm:col-span-3 lg:col-span-4 row-span-2 border "></div>
        <div className="sm:col-span-3 lg:col-span-4 row-span-2 border "></div>
        <div className="sm:col-span-3 lg:col-span-4 row-span-2 border "></div>
        <div className="sm:col-span-3 lg:col-span-4 row-span-2 border "></div>
      </div>
    </div>
  )
}

export default Dashboard