import * as React from 'react';
import SimpleButton from '../components/SimpleButton';

interface IRefProps {

}
interface IRefState {
    scrolled: boolean;
}

class Ref extends React.Component<IRefProps, IRefState>{
    myRef: React.RefObject<HTMLInputElement>;
    setTextInputRef: React.LegacyRef<HTMLInputElement>;
    textInput: HTMLInputElement | null = null;
    scrolled: boolean = false;

    constructor(props: IRefProps) {
        super(props);
        
        this.scrollToEdge = this.scrollToEdge.bind(this);
        this.inputFocus = this.inputFocus.bind(this);
        this.state = {
            scrolled: false
        }

        this.myRef = React.createRef();

        this.setTextInputRef = (element: HTMLInputElement) => {
            this.textInput = element;
        };
    }

    scrollToEdge(): void {
        if (this.state.scrolled) {
            this.myRef.current && (this.myRef.current.scrollTop = 0);
            this.setState({
                scrolled: false
            })
        } else {
            this.myRef.current && (this.myRef.current.scrollTop = 100);
            this.setState({
                scrolled: true
            }) 
        }
    }

    inputFocus(): void {
        this.textInput && (this.textInput.focus());
    }

    render() {
        return  (
                <div className="ref">
                    <h1>Ref</h1>
                    <div className="refscroll" ref={this.myRef}>
                        <div>Hello</div>
                        <div>this</div>
                        <div>is</div>
                        <div>a</div>
                        <div>long</div>
                        <div>text</div>
                    </div>
                    <SimpleButton caption="scroll" clickHandler={this.scrollToEdge}></SimpleButton>

                    <h2>Ref callback</h2>
                        <input type="text" value="12345" ref={this.setTextInputRef}/>
                        <div>
                            <SimpleButton caption="focus" clickHandler={this.inputFocus}></SimpleButton>
                        </div>
                </div>
            );    
        }
}

export { Ref }
