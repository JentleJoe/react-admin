import { useTheme } from "../theme/ThemeContext"

const Alert = ({text, color}) => {

    //Use text color modes
  return (
    <div title='alertbox' className='dialogbx-container'>
        <div className={`dialogbx ${color}`}>{text}</div>
    </div>
  )
}

export default Alert