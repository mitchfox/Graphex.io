import './App.css';
import { Column, Row } from "simple-flexbox";

// Simple App 

function App() {
  return (
    <div className="App">
      <div className="content">
        <Column style={{ width: "100%" }}>
          <Row
            wrap
            flexGrow={1}
            vertical="center"
            horizontal="spaced"
            style={{ backgroundColor: "grey" }}
          >

            <Column
              flexGrow={1}
            style={{ backgroundColor: "blue", color: "white", minWidth: "300px" }}
            >
              <span> Heatmap </span>
              <span> Graph 1 </span>
            </Column>


            <Column
              flexGrow={1}
            style={{ backgroundColor: "red", color: "white", minWidth: "300px" }}
            >
              <span> Content 3 </span>
              <span> Content 4 </span>
              <span> Content 5 </span>
            </Column>
          </Row>
        </Column>
      </div>
    </div>
  );
}

export default App;
