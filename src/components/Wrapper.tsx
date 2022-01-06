import * as React from 'react';

class Wrapper extends React.Component{
    render() {
        return  (
                <div className="wrapper_children"> 
                    <h2>Here is my children</h2>
                    {this.props.children}
                </div>
            );    
        }
}

export { Wrapper };