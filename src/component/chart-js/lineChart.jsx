import { Line } from "react-chartjs-2";
import { data, monthlyData, options, YearlyData } from "../data/lineData";
import { Select } from "antd";
import { Option } from "antd/es/mentions";
import { useState } from "react";

const LineChart = () =>{
    const [selectedRange, setSelectedRange] = useState('weekly');
    const getChartData =() =>{
        switch (selectedRange) {
            case 'monthly':
                return monthlyData;
            case 'yearly':
                return YearlyData;
            case "weekly":
            default:
                return data;
        }
    }
    return(
        <div className="dropdown-relative">
            <div className="dropdown-absolute">
            <Select
            defaultValue="weekly"
            onChange={(value) => setSelectedRange(value)}>
            <Option value="weekly">Weekly</Option>
            <Option value="monthly">Monthly</Option>
            <Option value="yearly">Yearly</Option>
            </Select>
            </div>
            <div className="chart-container">
         <Line data={getChartData()} options={options} height={200} width={1000}/>
         </div>
        </div>
    )
}
export default LineChart;