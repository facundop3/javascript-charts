import React, { useState, useEffect } from "react";

import logo from "./images/logo.svg";
import chartjslogo from "./images/chartjs-logo.svg";
import altiLogo from "./images/altilogo.png";
import facu from "./images/facu.jpeg";
import "./App.css";

import ChartSelector from "./components/Charts/ChartSelector";
import { ChartTypes } from "./components/Charts";
import SelectedChart from "./components/Charts/SelectedChart";
import { Slide } from "./components/slides";
import StreamLine from "./components/Charts/StreamLine";
import Dashborad from "./components/Dashboard/Dashboard";
import { initialData } from "./dummyData";
import styled from "styled-components";

const Avatar = styled.div.attrs({
  className: "App-logo"
})`
  height: 500px;
  width: 500px;
  border-radius: 50%;
  background-position: center;
  background-image: url(${(props: { bgImage: any }) => props.bgImage});
`;
const App: React.FC = () => {
  const [firstChartType, setFirstChartType] = useState<ChartTypes>("Pie");
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData({
        ...data,
        datasets: data.datasets.map(dataset => {
          const newData = dataset.data.map(() =>
            Math.round(Math.random() * 100)
          );
          return {
            ...dataset,
            data: newData
          };
        })
      });
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className="Logos-container">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>+</h1>
          <img src={chartjslogo} className="App-logo" alt="logo" />
        </div>
        <p>
          <code>React + Chartjs</code>
        </p>
        <a className="App-link" href="#slide" rel="noopener noreferrer">
          Tell me more
        </a>
      </header>
      <Slide odd={false}>
        <div>
          <h1>{"Frontend devaloper at Altimetrik, ( Yes we're hiring :) )"}</h1>
          <br />
          <div className="Logos-container">
            <Avatar bgImage={altiLogo} />
            <h1>+</h1>
            <Avatar bgImage={facu} />
          </div>
        </div>
      </Slide>
      <Slide odd>
        <div>
          <h1>Whats React?</h1>
          <h2>
            Well, probablly the 50% of the reason you are here paying atention
          </h2>
          <br></br>
          <h4>A JavaScript library for building user interfaces</h4>
          <br></br>
        </div>
      </Slide>
      <Slide odd={false}>
        <div>
          <h1>And whats Chartjs?</h1>
          <h4>
            Yep, as you may guess a Js lib for building charts (probablly the
            20% of the audience came for this)
          </h4>
          <a
            className="App-link"
            href="https://chartjs.org"
            rel="noopener noreferrer"
          >
            <h1>
              <strong>chartjs.org</strong>
            </h1>
          </a>
        </div>
      </Slide>
      <Slide odd>
        <div>
          <h1>How can I use it with React ?</h1>
          <h4>
            Well thanks to{" "}
            <a
              className="App-link"
              href="https://github.com/jerairrest"
              rel="noopener noreferrer"
            >
              <strong>Jeremy Ayerst</strong>
            </a>{" "}
            It's as simple as running:{" "}
            <code> npm -i --save react-chartjs-2 chart.js</code>
            <br />
            Then just import and use the Chart you'd like the most
          </h4>
          <a
            className="App-link"
            href="https://github.com/jerairrest/react-chartjs-2"
            rel="noopener noreferrer"
          >
            <h1>
              <strong>react-chartjs-2</strong>
            </h1>
          </a>
        </div>
      </Slide>
      <Slide odd={false}>
        <div>
          <h1>Sounds good, so, lets chart the Top Reasons to be here:</h1>
          <ChartSelector handleClick={setFirstChartType} />
          <SelectedChart type={firstChartType} data={data} />
        </div>
      </Slide>
      <Slide odd>
        <div>
          <h1>To do: Make an osiloscope with this</h1>
          <StreamLine />
        </div>
      </Slide>
      <Dashborad data={data} />
    </div>
  );
};

export default App;
