import React from "react";

import { Line } from "react-chartjs-2";

import "chartjs-plugin-streaming";

let currentIndex = 0;
const StreamLine = () => {
  // function randomScalingFactor() {
  //   return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
  // }
  function pseudoSin(index: number) {
    const values = [0, 80, 0, -80];
    currentIndex = (index + 1) % values.length;
    console.log(values[currentIndex]);
    return values[currentIndex];
  }

  function onRefresh(chart: any) {
    chart.config.data.datasets.forEach(function(dataset: any) {
      dataset.data.push({
        x: Date.now(),
        y: pseudoSin(currentIndex)
      });
    });
  }
  const chartColors = {
    red: "rgb(255, 99, 132)",
    orange: "rgb(255, 159, 64)",
    yellow: "rgb(255, 205, 86)",
    green: "rgb(75, 192, 192)",
    blue: "rgb(54, 162, 235)",
    purple: "rgb(153, 102, 255)",
    grey: "rgb(201, 203, 207)"
  };

  return (
    <Line
      width={800}
      height={400}
      data={{
        datasets: [
          // {
          //   label: "Dataset 1 (linear interpolation)",
          //   backgroundColor: "rgba(255, 99, 132, .5)",
          //   borderColor: chartColors.red,
          //   fill: false,
          //   lineTension: 0,
          //   borderDash: [8, 4],
          //   data: []
          // },
          {
            label: "Dataset 2 (cubic interpolation)",
            backgroundColor: "rgba(0, 255, 0, .5)",
            borderColor: "rgb(0, 255, 0)",
            fill: false,
            cubicInterpolationMode: "monotone",
            data: []
          }
        ]
      }}
      options={{
        title: {
          display: true,
          text: "Line chart (hotizontal scroll) sample"
        },
        scales: {
          xAxes: [
            {
              type: "realtime"
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "value"
              }
            }
          ]
        },
        tooltips: {
          mode: "nearest",
          intersect: false
        },
        hover: {
          mode: "nearest",
          intersect: false
        },
        plugins: {
          streaming: {
            duration: 20000,
            refresh: 1000,
            delay: 2000,
            onRefresh: onRefresh
          }
        }
      }}
    />
  );
};

export default React.memo(StreamLine, () => true);
