import React, { useState, useEffect, MouseEvent } from "react";
import styled from "styled-components";
import { Box } from "./index";
import "../../../node_modules/react-grid-layout/css/styles.css";
import "../../../node_modules/react-resizable/css/styles.css";
import SelectedChart from "../Charts/SelectedChart";
import GridLayout from "react-grid-layout";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ChartPicker from "./ChartPicker";
import { initialData } from "../../dummyData";
import { ChartTypes } from "../Charts";
import uuid from "uuid/v1";

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
  const defaultLayout: any = {
    i: uuid(),
    x: 1,
    y: 0,
    w: 3,
    h: 2,
    minW: 400,
    minH: 200,
    maxW: 800,
    maxH: 400
  };
  // { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
  // Modal stuff taken from:
  // https://github.com/sweetalert2/sweetalert2-react-content
  const MySwal = withReactContent(Swal);
  const [currentCharts, SetCurrentCharts] = useState<
    { type: ChartTypes; layout: any }[]
  >([]);
  const [addEdit, setAddEdit] = useState("");
  useEffect(() => {
    console.log(currentCharts);
  }, [currentCharts]);
  useEffect(() => {
    console.log(addEdit);
    MySwal.close();
  }, [addEdit]);
  const addNewChart = (type: ChartTypes) => {
    SetCurrentCharts(prevState => [
      ...prevState,
      { type, layout: { ...defaultLayout, i: uuid() } }
    ]);
    MySwal.close();
  };

  const triggerAlert = () => {
    const handleClick = (ev: MouseEvent) => {
      const element = ev.target as HTMLButtonElement;
      setAddEdit(element.value);
      MySwal.close();
    };

    MySwal.fire({
      html: (
        <div>
          <h1>Add a chart or edit your dashboard:</h1>
          <button
            onClick={handleClick}
            className="swal2-confirm swal2-styled"
            value="add"
          >
            Add a chart +
          </button>
          <button
            onClick={handleClick}
            className="swal2-confirm swal2-styled"
            value="edit"
          >
            Enter edit mode
          </button>
          <button
            onClick={handleClick}
            className="swal2-cancel swal2-styled"
            value="cancel"
          >
            Cancel
          </button>
        </div>
      ),
      showCancelButton: false,
      showConfirmButton: false
    }).then((result: any) => {
      console.log(addEdit);
      if (addEdit === "add") {
        //Pick the chart
        MySwal.fire({
          html: <ChartPicker sampleData={initialData} addNew={addNewChart} />,
          showCancelButton: true,
          showConfirmButton: false
        });
      } else if (addEdit === "edit") {
        // Make edditable
      } else if (addEdit === "cancel") {
      }
    });
  };

  return (
    <MainContainer>
      <Headder>
        Dummy Sample Analitics
        <button onClick={triggerAlert}>Edit</button>
      </Headder>
      <GridLayout
        className="layout"
        layout={currentCharts.map(({ layout }) => layout)}
        cols={12}
        rowHeight={100}
        width={1200}
      >
        {currentCharts.map(({ layout, type }) => (
          <Box data-grid={layout} key={layout.i}>
            <div>
              <SelectedChart
                type={type}
                data={"LinePolar".includes(type) ? coloredArea : data}
                height={200}
                width={400}
              />
            </div>
          </Box>
        ))}
      </GridLayout>
    </MainContainer>
  );
};

export default Dashboard;
