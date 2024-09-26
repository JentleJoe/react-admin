// import Sidebar from "./assets/scenes/global/Sidebar"
import { ThemeProvider } from "./theme/ThemeContext"
import Topbar from "./assets/scenes/global/Topbar"

function App() {

  return (
    <ThemeProvider>
      <div className="app">
        <Topbar />
      </div>
    </ThemeProvider>
  )
}

export default App
