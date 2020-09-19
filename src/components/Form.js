import React, { useState } from "react";

const Form = ({widths, colors, setColors, setWidths}) => {
    const [color, setColor] = useState("");
    const [width, setWidth] = useState();
    const onChangeColor = (e) => setColor(e.target.value);
    const onChangeWidth = (e) => setWidth(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        setColors([...colors, color]);
        setWidths(width);
        setColor("");
        setWidth("");
    
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="colors" onChange={onChangeColor} value={color} placeholder="Color" />
            <input type="text" name="width" onChange={onChangeWidth} value={width} placeholder="Width&Height" />
            <button>Submit</button>
        </form>
    );
}


export default Form;