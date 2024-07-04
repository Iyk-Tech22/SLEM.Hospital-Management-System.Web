  import { BarChart, Bar, Cell, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

  const data = [
    {
      name: "Emergency",
      quantity: 700,
    },
    {
      name: "ICU",
      quantity: 2210,
    },
    {
      name: "Neurology",
      quantity: 2290,
    },
    {
      name: "Cardiology",
      quantity: 2000,
    },
    {
      name: "Gynaecology",
      quantity: 2181,
    },
  ];
  const colors = ["#8068da", "#00e2f2", "#3734a9", "#ff805d", "#4cb050"];

  export default function EmployeeBarchart(){
    
      return (
        <ResponsiveContainer width="100%" height={250}>
          <BarChart width={50} height={70} barSize={50} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="quantity" fill="#8884d8">
              {data.map((entry, index) => (
                <Cell key={`${entry.name}-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      );
  }
