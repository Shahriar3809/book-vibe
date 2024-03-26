import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { getReadBooks } from "../Utils/LocalStorage";

const PageToRead = () => {



const [chartData, setChardData] = useState([])
useEffect(()=> {
    setChardData(getReadBooks());
}, [])

console.log(chartData)
  return (
    <div className="flex justify-center items-center bg-base-200 p-16">
      <BarChart width={900} height={500} data={chartData}>
        <XAxis dataKey="bookName"></XAxis>
        <Bar
          dataKey="totalPages"
          fill="#8884d8"
          label={{ position: "top" }}
        ></Bar>
        <YAxis dataKey="totalPages"></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default PageToRead;
