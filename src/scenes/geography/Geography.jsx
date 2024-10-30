import { GeographyChart, Header } from "../../components"
import { useTheme } from "../../theme/ThemeContext"

const Geography = () => {

    const { theme } = useTheme()
    const colors = theme.palette

  return (
    <div >
        <Header title='Geography Chart' subtitle='Simple Geography Chart' />
        <div className={` border h-[75vh] border-[${colors.grey[100]}] `} >
            <GeographyChart />
        </div>
    </div>
  )
}

export default Geography