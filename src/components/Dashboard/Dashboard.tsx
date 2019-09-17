import React from "react";
import styled from "styled-components";
import { Box } from "./";
import SelectedChart from "../Charts/SelectedChart";
const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f4f6f9;
`;

const Headder = styled.div`
  background-color: #fff;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
`;
const Dashboard = (props: { data: any }) => {
  const { data } = props;

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
    <MainContainer>
      <Headder>Dummy Sample Analitics</Headder>
      <Row>
        <Box>
          <SelectedChart type="Bar" data={data} height={200} width={400} />
        </Box>
        <Box>
          <SelectedChart type="Polar" data={data} height={200} width={400} />
        </Box>
      </Row>
      <Row>
        <Box>
          <SelectedChart
            type="Line"
            data={coloredArea}
            height={200}
            width={400}
          />
        </Box>
        <Box>
          <SelectedChart type="Doughnut" data={data} height={200} width={400} />
        </Box>
      </Row>
      <Row>
        <Box>
          <SelectedChart
            type="Radar"
            data={coloredArea}
            height={200}
            width={400}
          />
        </Box>
        <Box>
          <SelectedChart
            type="HorizontalBar"
            data={data}
            height={200}
            width={400}
          />
        </Box>
      </Row>
    </MainContainer>
  );
};

export default Dashboard;
