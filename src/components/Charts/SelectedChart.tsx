import React from "react";
import Charts, { ChartTypes } from "./";

const SelectedChart = (props: {
  type: ChartTypes;
  data: any;
  height?: number;
  width?: number;
  datasetKeyProvider?: () => string;
}) => {
  const { data } = props;
  const getCurrentChart = (props: { type: ChartTypes }) => Charts[props.type];
  const CurrentChart = getCurrentChart(props);
  return (
    <CurrentChart
      data={data}
      datasetKeyProvider={props.datasetKeyProvider}
      options={{
        responsive: true,
        maintainAspectRatio: true
      }}
      height={props.height}
      width={props.width}
    />
  );
};

export default SelectedChart;
