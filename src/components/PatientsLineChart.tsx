import { ILineChartData } from "@/data/constant";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


export default function PatientsLineChart({data}:{data:ILineChartData[]}) {
    return (
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="New Patients" stroke="#3734a9" />
          <Line type="monotone" dataKey="Old Patients" stroke="#FF805D" />
        </LineChart>
      </ResponsiveContainer>
    );
}
