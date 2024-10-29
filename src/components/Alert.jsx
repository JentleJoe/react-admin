import { useTheme } from "../theme/ThemeContext"

const Alert = ({text, color}) => {

  const { theme } = useTheme()

    //Use text color modes
  return (
    <div title='alertbox' className='dialogbx-container'>
        <div className={`dialogbx ${theme.text} ${color}`}>{text}</div>
    </div>
  )
}

export default Alert