import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";
import StyledBox from "./components/Value";


function App() {
  const [colors, setColors] = useState([]);
  const [widths, setWidths] = useState();


  return (
    <div className="App">
      <Form setColors={setColors} setWidths={setWidths} colors={colors} widths={widths} />
      {
        colors.map((color)=><StyledBox bgColor={color} width={widths}/>)
      }
    </div>
  );
}

export default App;