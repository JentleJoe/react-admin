import { useTheme } from "../theme/ThemeContext"
import { ResponsiveLine } from "@nivo/line"
import { tokens } from "../theme"
import { mockLineData as data } from "../data/mockData"

const LineChart = () => {
    const { theme } = useTheme()

  return (
    <div>LineChart</div>
  )
}

export default LineChart