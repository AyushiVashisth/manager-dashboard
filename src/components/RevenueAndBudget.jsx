import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
} from "recharts";

const revenueData = {
  month: [
    { date: "19 June", value: 1000 },
    { date: "20 June", value: 3000 },
    { date: "21 June", value: 3500 },
    { date: "22 June", value: 4000 },
    { date: "23 June", value: 5000 },
    { date: "24 June", value: 6500 },
    { date: "25 June", value: 6500 },
  ],
  week: [
    { date: "Mon", value: 2000 },
    { date: "Tue", value: 3500 },
    { date: "Wed", value: 3000 },
    { date: "Thu", value: 4500 },
    { date: "Fri", value: 4000 },
    { date: "Sat", value: 5000 },
    { date: "Sun", value: 5500 },
  ],
};

const budgetData = [
  { name: "Over Budget", value: 15, color: "#ff4d4d" },
  { name: "On Budget", value: 35, color: "#6c7293" },
  { name: "Under Budget", value: 50, color: "#00ffcc" },
];

const CustomToggle = ({ options, activeOption, onToggle }) => {
  return (
    <div className="flex items-center">
      <div className="text-xs">{options[0]}</div>

      <div
        className="relative flex items-center w-12 h-6 bg-gray-200 rounded-full p-1 cursor-pointer transition-all duration-300"
        onClick={() =>
          onToggle(activeOption === options[0] ? options[1] : options[0])
        }
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transition-all duration-300 transform ${
            activeOption === options[1] ? "translate-x-8" : "translate-x-0"
          }`}
        />
      </div>
      <div className="  text-xs">{options[1]}</div>
    </div>
  );
};

const RevenueAndBudget = () => {
  const [activeTab, setActiveTab] = useState("Month");
  const [activeBudgetView, setActiveBudgetView] = useState("Profitability");

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
    const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-1">
                Total revenue
              </h2>
              <div className="text-gray-400 text-sm">Goal: €8,000</div>
            </div>
            <CustomToggle
              options={["Month", "Week"]}
              activeOption={activeTab}
              onToggle={setActiveTab}
            />
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData[activeTab.toLowerCase()]}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 12 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 12 }}
                  dx={-10}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#00ffcc"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Budget Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-gray-800">Budget</h2>
            <CustomToggle
              options={["Profitability", "Status"]}
              activeOption={activeBudgetView}
              onToggle={setActiveBudgetView}
            />
          </div>
          <div className="flex justify-center items-center h-[240px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={budgetData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  labelLine={false}
                  label={renderCustomizedLabel}
                >
                  {budgetData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-2xl font-bold">5</div>
              <div className="text-sm text-gray-500">Total projects</div>
            </div>
          </div>
          <div className="flex justify-center space-x-6 mt-4">
            {budgetData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-gray-600">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueAndBudget;
