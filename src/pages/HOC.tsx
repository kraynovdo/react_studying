import React from 'react';
import ColorHoc from "../components/HighOrderComponent";
import SimpleOutput from "../components/SimpleOutput";

const ColorTrue = ColorHoc(
    SimpleOutput,
    () => {return true}
);
  
const ColorFalse = ColorHoc(
    SimpleOutput,
    () => {return false}
);

const HOC = () => {
    return (
        <div className="hoc">
            <h1>HOC</h1>

            <h2>True</h2>
            <ColorTrue outputValue="green"></ColorTrue>
            <h2>False</h2>
            <ColorFalse outputValue="red"></ColorFalse>
        </div>
    )
}

export { HOC }
