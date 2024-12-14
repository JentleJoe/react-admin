import { useTheme } from "../theme/ThemeContext"
import ProgressCircle from "./ProgressCircle"

const StatBox = ({ title, value, icon, progress, increase  }) => {
    const { theme } = useTheme()
    const colors = theme.palette

  return (
    <div className="flex justify-between items-center h-full ">
        <div className="flex flex-col ">
            <div className="stat-icon mb-1" >{icon}</div>
            <h3 className={`text-xl font-bold ${theme.text}`} >{value}</h3>
            <p className={`text-[#4cc2ac]`}>{title}</p>
        </div>
        <div className="flex flex-col">
            <div>
                <ProgressCircle progress={progress} size={45} strokeWidth={5} />
            </div>
            <div className={`text-[#4cc2ac] italic`}>{increase}</div>
        </div>
    </div>
  )
}

export default StatBox