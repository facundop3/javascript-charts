import React from "react";
import { Box } from "./index";
import SelectedChart from "../Charts/SelectedChart";
import { ChartTypes } from "../Charts/index";
import styled from "styled-components";
import uuid from "uuid/v1";
const ChartPicker = (props: {
  sampleData: any;
  addNew: (t: ChartTypes) => void;
}) => {
  const availableCharts: ChartTypes[] = [
    "Bar",
    "Polar",
    "Line",
    "Doughnut",
    "Radar",
    "HorizontalBar"
  ];
  const { sampleData: data, addNew } = props;
  const PickerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const boxSizes = {
    maxWidth: "300px",
    maxHeight: "200px"
  };
  const coloredArea = {
    ...data,
    datasets: data.datasets.map((dataset: any[], index: number) => ({
      ...dataset,
      backgroundColor: !index ? "#ffb1c1" : "#ffe6aa",
      pointBackgroundColor: !index ? "#ffb1c1" : "#ffe6aa",
      pointBorderColor: !index ? "#ffb1c1" : "#ffe6aa",
      pointHoverBackgroundColor: !index ? "#ffb1c1" : "#ffe6aa",
      pointHoverBorderColor: !index ? "#ffb1c1" : "#ffe6aa"
    }))
  };
  return (
    <PickerContainer>
      <h1>Select a chart type :</h1>
      {availableCharts.map(type => {
        return (
          <Box style={boxSizes} key={uuid()} onClick={() => addNew(type)}>
            <SelectedChart
              type={type}
              data={"LineRadar".includes(type) ? coloredArea : data}
            />
          </Box>
        );
      })}
    </PickerContainer>
  );
};

export default ChartPicker;
