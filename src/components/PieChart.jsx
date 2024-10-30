import { useTheme } from "../theme/ThemeContext"
import { ResponsivePie } from "@nivo/pie"
import { tokens } from "../theme"
import { mockPieData as data } from "../data/mockData"

const PieChart = () => {

    const { theme } = useTheme()

  return (
    <div>PieChart</div>
  )
}

export default PieChart