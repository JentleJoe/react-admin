import { BarChart, Header } from "../../components"

const Bar = () => {

  return (
    <div>
        <Header title='Bar Chart' subtitle='Simple Bar Chart' />
        <div className="h-[75vh]" >
            <BarChart />
        </div>
    </div>
  )
}

export default Bar