import React from "react";

const StyledBox = ({ bgColor, width }) => {

    const styling = {
        backgroundColor: [bgColor],
        width: [width]+"px",
        height: [width]+"px",
        display: "inline-block",
        margin: "15px 15px"
    }

       

    return (
        <div style={styling}></div>
    );
}

export default StyledBox;