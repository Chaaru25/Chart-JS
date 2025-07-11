import { Doughnut } from "react-chartjs-2";
import './graph.css'
import { donutConfig, donutConfigOne, donutConfigTwo, doughnutdata, doughnutdataThree, doughnutdataTwo } from "../data/doughnutData"

const DoughnutGraph =() =>{
 return(
<div className="d-flex justify-evenly padding-inline">
    <div className="doughnut-bg">
    <Doughnut data={doughnutdata} options={donutConfig} height={300} width={350}  />
    </div>
    <div className="doughnut-bg">
    <Doughnut data={doughnutdataTwo} options={donutConfigOne} height={300} width={350}  />
    </div>
    <div className="doughnut-bg">
    <Doughnut data={doughnutdataThree} options={donutConfigTwo} height={300} width={350}  />
    </div>
    </div>
 )
}
export default DoughnutGraph;