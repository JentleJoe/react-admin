import { useTheme } from "../theme/ThemeContext"
import ProgressCircle from "./ProgressCircle"

const StatBox = ({ title, value, icon, progress, increase  }) => {
  return (
    <div className="flex justify-between items-center h-full ">
        <div className="flex flex-col ">
            <div className="stat-icon" >{icon}</div>
            <h3 className="text-xl font-bold" >{value}</h3>
            <p>{title}</p>
        </div>
        <div className="flex flex-col">
            <div>
                <ProgressCircle progress={progress} size={45} strokeWidth={5} />
            </div>
            <div className="font-">{increase}</div>
        </div>
    </div>
  )
}

export default StatBox