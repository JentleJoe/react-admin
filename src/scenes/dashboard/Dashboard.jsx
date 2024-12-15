import { Header, ProgressCircle, LineChart, BarChart, GeographyChart, StatBox } from "../../components"
import { useTheme } from "../../theme/ThemeContext"
import { DownloadOutlined, Percent } from "@mui/icons-material"
import { Email, PointOfSale, PersonAdd, Traffic } from "@mui/icons-material"

const Dashboard = () => {
  
  const { theme, isDarkMode } = useTheme()

  const colors = theme.palette

  const stats = [
    {
      icon: <Email sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />,
      title: 'Emails Sent',
      increase: '+15%',
      value: '13,450',
      progress: '75',
    },
    {
      icon: <PointOfSale sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />,
      title: 'Sales Obtained',
      increase: '+25%',
      value: '400,225',
      progress: '50',
    },
    {
      icon: <PersonAdd sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />,
      title: 'New Clients',
      increase: '+5%',
      value: '36,442',
      progress: '30',
    },
    {
      icon: <Traffic sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />,
      title: 'Traffic Received',
      increase: '+43%',
      value: '1,205,325',
      progress: '80',
    },
  ]

  const transactions = [
    {
      id: '01e4dsa',
      name: 'JentleJoe',
      date: '2024-12-01',
      amount: '$450.95',
    },
    {
      id: '01e4dsb',
      name: 'Epignosis',
      date: '2024-12-01',
      amount: '$305.05',
    },
    {
      id: '01e4dsc',
      name: 'Fabian',
      date: '2024-12-02',
      amount: '$400.65',
    },
    {
      id: '01e4dsd',
      name: 'Fortune',
      date: '2024-12-02',
      amount: '$750.60',
    },
    {
      id: '01e4dse',
      name: 'Ulam',
      date: '2024-12-03',
      amount: '$250.05',
    },
    {
      id: '01e4dsf',
      name: 'Eguono',
      date: '2024-12-03',
      amount: '$520.30',
    },
    {
      id: '01e4dsg',
      name: 'David',
      date: '2024-12-04',
      amount: '$603.54',
    },
    {
      id: '01e4dsh',
      name: 'Precious',
      date: '2024-12-05',
      amount: '$340.23',
    },
  ]

  return (
    <div className="text-white">
      <div className={`flex items-center justify-between`}>
        <Header title="DASHBOARD" subtitle='Welcome to Your Dashboard' />
        <button style={{background : colors.blueAccent[700]}} className={`flex items-center gap-[10px] rounded-[4px] sm:text-sm text-xs font-bold pr-4 sm:pr-5 pl-4 py-[10px] ${theme.text} `}>
          <DownloadOutlined />
          <div className="max-[480px]:hidden">DOWNLOAD REPORTS</div>
        </button>
      </div>
      <div className="grid sm:grid-cols-6 lg:grid-cols-12 gap-5 auto-rows-fr  ">
        {
          stats.map((stat, index) => (
            <div key={index} className={`sm:col-span-3 ${theme.background2} p-5`}>
              <StatBox title={stat.title} value={stat.value} icon={stat.icon} progress={stat.progress} increase={stat.increase} />
            </div>
          ))
        }
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
          <div className="h-[250px] m-[-30px] ">
            <LineChart isDashboard={true} />
          </div>
        </div>
        <div className={`sm:col-span-3 lg:col-span-4 row-span-2 flex flex-col max-h-[310px] gap-1`}>
          <p className={`font-semibold ${theme.text} p-4 ${theme.background2} `}>Recent Transactions</p>
          <div className={`flex flex-col gap-1 overflow-y-scroll no-scrollbar`}>
            {
              transactions.map((item) => (
                <div key={item.id} className={`p-4 ${theme.background2} flex justify-between gap-2 items-center text-sm`}>
                  <div className={``} >
                    <p className="text-[#4cc2ac] font-semibold">{item.id}</p>
                    <p className={`${theme.text}`}>{item.name}</p>
                  </div>
                  <div className={`${theme.text}`} >{item.date}</div>
                  <div className={`p-2 font-medium text-black bg-[#4cc2ac] rounded-sm flex items-center justify-center`} >
                    {item.amount}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className={`p-4 sm:col-span-3 lg:col-span-4 row-span-2 ${theme.background2} `}>
          <p className={`font-semibold ${theme.text}`}>Campaign</p>
          <div className="flex flex-col justify-center items-center mt-6">
            <ProgressCircle progress={75} size={130} strokeWidth={13} />
            <p className="mt-2 text-[#4cc2ac] font-medium">$62,520 revenue generated</p>
            <p className={`${theme.text} text-xs`}>includes extra misc expenditures and costs</p>
          </div>
        </div>
        <div className={`p-4 sm:col-span-3 lg:col-span-4 row-span-2 ${theme.background2} `}>
          <p className={`font-semibold ${theme.text}`}>Sales Quantity</p>
          <div className=" w-auto h-[250px] mx-[-30px]">
            <BarChart isDashboard={true} />
          </div>
        </div>
        <div className={`p-4 sm:col-span-3 lg:col-span-4 row-span-2 ${theme.background2} `}>
          <p className={`font-semibold ${theme.text} mb-5`}>Geography Based Traffic</p>
          <div className=" w-auto h-[200px] mx-[-20px]">
            <GeographyChart isDashboard={true} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard