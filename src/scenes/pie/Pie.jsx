import { PieChart, Header } from "../../components"

const Pie = () => {

  return (
    <div>
        <Header title='Pie Chart' subtitle='Simple Pie Chart' />
        <div className="h-[75vh]" >
            <PieChart />
        </div>
    </div>
  )
}

export default Pie