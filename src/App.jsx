import { Topbar, Sidebar } from "./scenes/global"
import { useTheme } from "./theme/ThemeContext"
import { Route, Routes } from "react-router-dom"
import { Dashboard } from "./scenes/dashboard"
import { Team, Contacts } from "./scenes"


function App() {
  const { theme, isDarkMode, toggleTheme } = useTheme()

  return (
  <>
    <div className={`app ${theme.background}`}>
      <aside>
        <Sidebar />
      </aside>
      <main className={`content`} >
        <Topbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
    </div>
  </>
  )
}

export default App
