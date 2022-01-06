import * as React from 'react';

interface ISimpleProps {
    isWeekend: boolean;
}

class SimpleComponent extends React.Component<ISimpleProps>{
    render() {
        return  (
                <> 
                    {this.props.isWeekend &&
                        <div>Today is weekend</div>
                    }
                </>
            );    
        }
}

export default SimpleComponent;