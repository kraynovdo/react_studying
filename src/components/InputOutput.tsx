import * as React from 'react';

interface ISimpleProps {
    initialText: string;
}

interface ISimpleState {
    text: string;
}

class InputOutput extends React.Component<ISimpleProps, ISimpleState>{
    constructor(props: ISimpleProps) {
        super(props);
        this.state = {
            text: props.initialText
        }
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(e: React.FormEvent<HTMLInputElement>) {
        this.setState({
            text: e.currentTarget.value
        })
    }
    render() {
        return  (
                <> 
                    <input type="text" value={this.state.text} onChange={this.handleInput}/>
                    <div>Text = {this.state.text}</div>
                </>
            );    
        }
}

export { InputOutput };