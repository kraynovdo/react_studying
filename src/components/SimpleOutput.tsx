interface ISimpleFncProps {
    outputvalue: string;
}

const SimpleOutput = (props: ISimpleFncProps) => {
    return (
        <> 
            <div>Value = <b>{props.outputvalue}</b></div>
        </>
    );    
}

export default SimpleOutput;