import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  /* transform a dataPoint object to a number */
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  /* max method requires values or list of values so we use spread operator */
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
