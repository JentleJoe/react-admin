import { Topbar, Sidebar } from "./scenes/global"
import { useTheme } from "./theme/ThemeContext"
import { Route, Routes } from "react-router-dom"
import { Dashboard } from "./scenes/dashboard"
import { Team, Contacts, Invoices, Form, Calendar, Faq, Pie, Line, Bar, Geography } from "./scenes"
import { Alert } from "./components"
import { useState } from "react"


function App() {
  const { theme } = useTheme()
  const [alert, setAlert] = useState({showAlert: false, color: '', text: ''})
  const [showSidebar, setShowSidebar] = useState(false) //handles mobile sidebar
  
  
  const handleAlert = (text, color) => {
    if (alert.showAlert){
      // Means Alert is currently been diplayed, Returns to default OFF
      setAlert(() => ({
        showAlert: false,
        color: '',
        text: ''
      }))
    }
    else //Shows Alert for x seconds and toggles it OFF
    {
      setAlert((prev) => ({
        ...prev,
        showAlert: !alert.showAlert,
        color: color,
        text: text
      }))
      setTimeout(()=>{
        setAlert((prev) => ({
          showAlert: false,
          color: '',
          text: ''
        }))
      }, 1000)
    }
  }

  const toggleShowSidebar = () => {
    setShowSidebar((prev) => !prev)
  }

  return (
  <>
    <div className={`app`}>
      <aside className={`max-md:hidden ${theme.sidebar}`} >
        <Sidebar />
      </aside>
      {/* Mobile Sidebar */}
      {
        showSidebar ?
        <aside className={`absolute w-full left-0 z-[50] md:hidden ${theme.sidebar}
        transition-transform duration-500 ease-in-out ${showSidebar ? 'translate-x-0' : 'translate-x-full'}`} >
          <Sidebar ismobile={true} toggleShowSidebar={toggleShowSidebar}  />
        </aside>
        :
        null
      }
      <main className={`main overflow-y-auto overflow-x-hidden relative content ${theme.background} p-5`} >
      {alert.showAlert && <Alert text={alert.text} color={alert.color} />}
        <Topbar showSidebar={showSidebar} toggleShowSidebar={toggleShowSidebar} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/form" element={<Form setAlert={handleAlert} />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/barchart" element={<Bar />} />
          <Route path="/linechart" element={<Line />} />
          <Route path="/piechart" element={<Pie />} />
          <Route path="/geography" element={<Geography />} />
        </Routes>
      </main>
    </div>
  </>
  )
}

export default App
