import React from 'react';

interface ISimpleFncProps {
    outputValue: string;
    className?: string;
}

const SimpleOutput = (props: ISimpleFncProps) => {
    return (
        <> 
            <div className={props.className}>Value = <b>{props.outputValue}</b></div>
        </>
    );    
}

export default SimpleOutput;