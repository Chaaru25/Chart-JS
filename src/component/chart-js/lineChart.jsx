import { Line } from "react-chartjs-2";
import { data, monthlyData, options, YearlyData } from "../data/lineData";
import { Select } from "antd";
import { Option } from "antd/es/mentions";
import { useState } from "react";

const LineChart = () =>{
    const [selectedRange, setSelectedRange] = useState('monthly');
    const getChartData =() =>{
        switch (selectedRange) {
            case 'weekly':
                return data;
            case 'yearly':
                return YearlyData;
            case "monthly":
            default:
                return monthlyData;
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
         <Line data={getChartData()} options={options} height={200} width={1000} className="bg-white"/>
        </div>
    )
}
export default LineChart;