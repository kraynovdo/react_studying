import React from 'react';
const SimpleOutput = (props) => {
    return (
        <> 
            <button onClick={props.clickHandler}>{props.caption}</button>
        </>
    );    
}

export default SimpleOutput;