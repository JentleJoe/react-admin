import { useTheme } from "../theme/ThemeContext"
import { ResponsiveBar } from "@nivo/bar"
import { tokens } from "../theme"
import { mockBarData as data } from "../data/mockData"

const BarChart = () => {
    const { theme } = useTheme()

  return (
    <div>BarChart</div>
  )
}

export default BarChart