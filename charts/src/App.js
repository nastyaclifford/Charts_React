import React from "react";
import "./App.css";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
} from "recharts";

const App = () => {
  const data = [
    { name: "Canadian", value: 11000000 },
    { name: "English", value: 6000000 },
    { name: "Scottish", value: 4700000 },
    { name: "French", value: 4600000 },
    { name: "Irish", value: 4600000 },
    { name: "German", value: 3300000 },
  ];

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Largest ethnic origins in Canada</h1>
      <div className="App">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />

          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />

          <YAxis />
          <Tooltip />

          <CartesianGrid strokeDasharray="3 3" />

          <Bar dataKey="value" fill="#8884d8">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default App;
