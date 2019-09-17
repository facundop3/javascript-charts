import React from "react";
import uuid from "uuid/v1";
import { ChartTypes } from "./";
const ChartSelector = (props: { handleClick: (t: ChartTypes) => void }) => {
  const chartsTypes: ChartTypes[] = [
    "Doughnut",
    "Pie",
    "Line",
    "Bar",
    "HorizontalBar",
    "Radar",
    "Polar"
  ];

  const handleClick = (ev: any) => {
    props.handleClick(ev.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <div>
        {chartsTypes.map(chartType => {
          return (
            <button
              name="chart"
              value={chartType}
              onClick={handleClick}
              key={uuid()}
            >
              {chartType}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ChartSelector;
