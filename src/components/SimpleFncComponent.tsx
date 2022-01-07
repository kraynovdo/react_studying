import React from 'react';

interface ISimpleFncProps {
    day: number;
    isWeekend: boolean;
}

const SimpleFncComponent = (props: ISimpleFncProps) => {
    return (
        <> 
            <h3>Today is {props.day}</h3>
            <span className={props.isWeekend ? 'app-weekend' : ''}>Hello</span>
        </>
    );    
}

export default SimpleFncComponent;