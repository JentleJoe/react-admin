import { LineChart, Header } from "../../components"

const Line = () => {

  return (
    <div>
        <Header title='Line Chart' subtitle='Simple Line Chart' />
        <div className="h-[75vh]" >
            <LineChart />
        </div>
    </div>
  )
}

export default Line