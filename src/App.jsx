import Topbar from "./scenes/global/Topbar"
import { useTheme } from "./theme/ThemeContext"

function App() {
  const { theme, isDarkMode, toggleTheme } = useTheme()

  return (
  <>
    <div className={`app ${theme.background}`}>
      <Topbar />
    </div>
  </>
  )
}

export default App
