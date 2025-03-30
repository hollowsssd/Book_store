"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    booksSold: 120,
    profit: 5000,
  },
  {
    name: "Feb",
    booksSold: 150,
    profit: 7000,
  },
  {
    name: "Mar",
    booksSold: 180,
    profit: 8500,
  },
  {
    name: "Apr",
    booksSold: 200,
    profit: 9500,
  },
  {
    name: "May",
    booksSold: 170,
    profit: 8000,
  },
  {
    name: "Jun",
    booksSold: 190,
    profit: 9000,
  },
  {
    name: "Jul",
    booksSold: 220,
    profit: 10500,
  },
  {
    name: "Aug",
    booksSold: 210,
    profit: 10200,
  },
  {
    name: "Sep",
    booksSold: 230,
    profit: 11000,
  },
  {
    name: "Oct",
    booksSold: 250,
    profit: 12000,
  },
  {
    name: "Nov",
    booksSold: 270,
    profit: 13000,
  },
  {
    name: "Dec",
    booksSold: 300,
    profit: 15000,
  },
];

const SalesChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Book Sales & Profit</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="booksSold"
            fill="#FAE27C"
            legendType="circle"
            radius={[10, 10, 0, 0]}
            name="Books Sold"
          />
          <Bar
            dataKey="profit"
            fill="#C3EBFA"
            legendType="circle"
            radius={[10, 10, 0, 0]}
            name="Profit ($)"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
