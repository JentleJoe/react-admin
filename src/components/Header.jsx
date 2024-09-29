import { useTheme } from "../theme/ThemeContext"

const Header = ({ title, subtitle }) => {
    const { theme } = useTheme()

  return (
    <div className={`mb-8`}>
        <h2 className={`text-bold ${theme.text} sm:mb-[5px] `}>{title}</h2>
        <h2 className={`${theme.text} `}>{subtitle}</h2>
    </div>
  )
}

export default Header