import { useTheme } from "../theme/ThemeContext"

const Header = ({ title, subtitle }) => {
    const { theme } = useTheme()

  return (
    <div className={`mb-8 mt-10`}>
        <h2 className={`font-bold ${theme.text} text-3xl sm:mb-[5px] `}>{title}</h2>
        <h2 className={`text-[#4CC2AC] font-medium `}>{subtitle}</h2>
    </div>
  )
}

export default Header