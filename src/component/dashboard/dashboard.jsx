import {
  ArcElement,
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import DoughnutGraph from "../chart-js/doughnutGraph";
import TagColorBar from "../chart-js/horizontalBar";
import TableComp from "../chart-js/tableComponent";
import { tagData, tagDataColumns } from "../data/tagBreakDownData";
import { tableColumns, tableDataSource } from "../data/tableData";
import LineChart from "../chart-js/lineChart";
import TableComponent from "../chart-js/tableComponent";
ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Legend,
  Tooltip,
  Filler,
  ArcElement,
  BarElement,
  BarController
);
function Dashboard() {
  return (
    <>
      <LineChart />
      <TableComponent
        tag={false}
        dataSource={tableDataSource}
        columns={tableColumns}
        size="small"
        title="CHILD DETAILS"
      />
      <DoughnutGraph />
      <TableComponent
        tag
        dataSource={tagData}
        columns={tagDataColumns}
        size="medium"
        title="TAG BREAKDOWN"
      />
    </>
  );
}
export default Dashboard;
