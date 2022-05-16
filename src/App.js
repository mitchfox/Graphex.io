import React from 'react';
import './App.css';
import { Column, Row } from "simple-flexbox";

// Chart Components
import Chart1 from './Components/Chart1';



// Simple Responsive WebApp showcasing various graphing components
function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="container">
          <p className="text">Simple Responsive WebApp showcasing various graphing components</p>
        </div>
        <Column style={{ width: "100%" }}>
          <Row
            wrap
            flexGrow={1}
            vertical="center"
            horizontal="spaced"
          //style={{ backgroundColor: "grey" }}
          >

            <Column
              flexGrow={1}
              style={{ color: "white" }}
            >
              <div className="graphContainer">
                {/* <Chart1 /> */}
              </div>

              <div className="graphContainer">
                Graph 2
              </div>

              <div className="graphContainer">
                Graph 3
              </div>

            </Column>


            <Column
              flexGrow={1}
              style={{ color: "white" }}
            >
           <div className="graphContainer">
                Graph 4
              </div>

              <div className="graphContainer">
                Graph 5
              </div>

              <div className="graphContainer">
                Graph 6
              </div>
            </Column>
          </Row>
        </Column>
      </div>
    </div>
  );
}

export default App;
