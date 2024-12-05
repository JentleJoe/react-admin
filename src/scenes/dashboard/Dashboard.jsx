import { Header } from "../../components"
import { useTheme } from "../../theme/ThemeContext"
import { DownloadOutlined, Percent } from "@mui/icons-material"

const Dashboard = () => {
  
  const { theme, isDarkMode } = useTheme()

  const colors = theme.palette

  return (
    <div className="text-white">
      <div className={`flex items-center justify-between`}>
        <Header title="DASHBOARD" subtitle='Welcome to Your Dashboard' />
        <button className={`flex items-center gap-[10px] border rounded-sm text-sm font-bold px-5 py-[10px] ${theme.text} `}>
          <DownloadOutlined />
          Dowload Reports
        </button>
      </div>
      <div className="grid sm:grid-cols-6 lg:grid-cols-12 gap-5 auto-rows-fr  ">
        <div className={`sm:col-span-3 min-h-[140px] ${theme.background2}`}></div>
        <div className={`sm:col-span-3 ${theme.background2}`}></div>
        <div className={`sm:col-span-3 ${theme.background2}`}></div>
        <div className={`sm:col-span-3 ${theme.background2}`}></div>
        <div className={`sm:col-span-6 lg:col-span-8 row-span-2 p-6 ${theme.background2}`}>
          <div className="flex justify justify-between items-center" >
            <div>
              <p className={`font-semibold ${theme.text}`}>Revenue Generated</p>
              <h3 className="font-bold text-[#4cc2ac] text-2xl">$105,805.75</h3>
            </div>
            <div className="hover:bg-slate-600 rounded-full flex items-center justify-center p-1 hover:p-2 cursor-pointer text-[#4cc2ac]">
              <DownloadOutlined />
            </div>
          </div>
        </div>
        <div className={`p-6 sm:col-span-3 lg:col-span-4 row-span-2  ${theme.background2} `}>
          <p className={`font-semibold ${theme.text}`}>Recent Transactions</p>
        </div>
        <div className={`p-6 sm:col-span-3 lg:col-span-4 row-span-2  ${theme.background2} `}>
          <p className={`font-semibold ${theme.text}`}>Campaign</p>
        </div>
        <div className={`p-6 sm:col-span-3 lg:col-span-4 row-span-2  ${theme.background2} `}>
          <p className={`font-semibold ${theme.text}`}>Sales Quantity</p>
        </div>
        <div className={`p-6 sm:col-span-3 lg:col-span-4 row-span-2  ${theme.background2} `}>
          <p className={`font-semibold ${theme.text}`}>Geography Based Traffic</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard