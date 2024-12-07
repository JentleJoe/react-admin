import { Header } from "../../components"
import { useTheme } from "../../theme/ThemeContext"
import { DownloadOutlined, Percent } from "@mui/icons-material"

const Dashboard = () => {
  
  const { theme, isDarkMode } = useTheme()

  const colors = theme.palette

  const stats = [
    {
      icon: '',
      title: 'Emails Sent',
      percent: '+15%',
      value: '13,450',
    },
    {
      icon: '',
      title: 'Sales Obtained',
      percent: '+25%',
      value: '400,225',
    },
    {
      icon: '',
      title: 'New Clients',
      percent: '+5%',
      value: '36,442',
    },
    {
      icon: '',
      title: 'Traffic Received',
      percent: '+43%',
      value: '1,205,325',
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
        <button className={`flex items-center gap-[10px] border rounded-sm text-sm font-bold px-5 py-[10px] ${theme.text} `}>
          <DownloadOutlined />
          Dowload Reports
        </button>
      </div>
      <div className="grid sm:grid-cols-6 lg:grid-cols-12 gap-5 auto-rows-fr  ">
        <div className={`sm:col-span-3 min-h-[130px] ${theme.background2}`}></div>
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
        <div className={`sm:col-span-3 lg:col-span-4 row-span-2 flex flex-col max-h-[280px] gap-1`}>
          <p className={`font-semibold ${theme.text} p-4 ${theme.background2} `}>Recent Transactions</p>
          <div className={`flex flex-col max-h-[280px] gap-1 overflow-y-scroll no-scrollbar`}>
            {
              transactions.map((item) => (
                <div key={item.id} className={`p-4 ${theme.background2} flex justify-between gap-2 items-center text-sm`}>
                  <div className={``} >
                    <p className="text-[#4cc2ac] font-semibold">{item.id}</p>
                    <p className={`${theme.text}`}>{item.name}</p>
                  </div>
                  <div className={`${theme.text}`} >{item.date}</div>
                  <div className={`p-2 ${theme.text} bg-[#4cc2ac] rounded-sm flex items-center justify-center`} >
                    {item.amount}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className={`p-4 sm:col-span-3 lg:col-span-4 row-span-2 ${theme.background2} `}>
          <p className={`font-semibold ${theme.text}`}>Campaign</p>
        </div>
        <div className={`p-4 sm:col-span-3 lg:col-span-4 row-span-2 ${theme.background2} `}>
          <p className={`font-semibold ${theme.text}`}>Sales Quantity</p>
        </div>
        <div className={`p-4 sm:col-span-3 lg:col-span-4 row-span-2 ${theme.background2} `}>
          <p className={`font-semibold ${theme.text}`}>Geography Based Traffic</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard