import * as React from 'react';

interface IDoubleWrapperOptions {
    top: React.ReactChild;
    bottom: React.ReactChild;
}

class DoubleWrapper extends React.Component<IDoubleWrapperOptions>{
    render() {
        return  (
                <div className="wrapper_children"> 
                    <h2>Here is my children</h2>
                    <h3>Top</h3>
                    {this.props.top}
                    <h3>Bottom</h3>
                    {this.props.bottom}
                </div>
            );    
        }
}

export { DoubleWrapper };
