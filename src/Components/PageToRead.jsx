/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { getReadBooks } from "../Utils/LocalStorage";




const PageToRead = () => {

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };
  
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


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
          shape={<TriangleBar />}
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
