import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const departments = ["Emergency", "ICU", "Neurology", "Cardiology", "Gynaecology"];
const colors = ["#8068da", "#00e2f2", "#3734a9", "#ff805d", "#4cb050"];
const data = [
  { name: "Emergency", value: 400 },
  { name: "ICU", value: 300 },
  { name: "Neurology", value: 300 },
  { name: "Cardiology", value: 200 },
  { name: "Gynaecology", value: 150 },
];


export default function TotalPiechart() {
    return (
        <div className="flex justify-between items-center">
        <ul className="flex flex-col space-y-4">
          {departments.map((department, index) => (
            <li
              key={department}
              className="flex items-center space-x-2 text-xs font-medium"
            >
              <span
                className={`w-2 h-2 rounded-full`}
                style={{ backgroundColor: colors[index] }}
              ></span>
              <p
                className={`text-[${colors[index]}]`}
                style={{ color: colors[index] }}
              >
                {department}
              </p>
            </li>
          ))}
        </ul>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
    );
}