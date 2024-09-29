import { Topbar, Sidebar } from "./scenes/global"
import { useTheme } from "./theme/ThemeContext"
import { Route, Routes } from "react-router-dom"
import { Dashboard } from "./scenes/dashboard"


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
        </Routes>
      </main>
    </div>
  </>
  )
}

export default App
