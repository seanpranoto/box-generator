import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";
import StyledBox from "./components/Value";


function App() {
  const [state, setState] = useState({
    colors: [],
    widths: []
  });


  return (
    <div className="App">
      <Form setState={setState} state={state} />
      {
        state.colors.map((val, i)=><StyledBox bgColor={state.colors[i]} width={state.widths[i]}/>)
      }
    </div>
  );
}

export default App;