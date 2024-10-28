const Alert = ({text, color}) => {
  return (
    <div title='alertbox' className='dialogbx-container'>
        <div className={`dialogbx ${color}`}>{text}</div>
    </div>
  )
}

export default Alert