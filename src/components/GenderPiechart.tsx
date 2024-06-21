import { PieChart, Pie, Cell ,Tooltip, ResponsiveContainer } from "recharts";

const genders = ["Male", "Female"];
const colors = ["#FF805D", "#3734a9"];
const data = [
  { name: "Male", value: 300 },
  { name: "Female", value: 400 },
];


export default function GenderPiechart() {
  return (
    <div className="flex justify-between items-center">
      <ul className="flex flex-col space-y-4">
        {genders.map((gender, index) => (
          <li
            key={gender}
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
              {gender}
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
