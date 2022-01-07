import React from 'react';
import ReactDOM from 'react-dom';
import SimpleButton from '../components/SimpleButton';
import { useState } from 'react';

const modalRoot = document.getElementById('modal-root');

interface IModalProps {};
class Modal extends React.Component<IModalProps> {
    el: HTMLElement;

    constructor(props: IModalProps) {
        super(props);
        this.el = document.createElement('div');
    }
  
    componentDidMount() {
        modalRoot && modalRoot.appendChild(this.el);
    }
  
    componentWillUnmount() {
        modalRoot && modalRoot.removeChild(this.el);
    }
  
    render() {
      return ReactDOM.createPortal(
        this.props.children,
        this.el
      );
    }
}

const Portal = () => {
    const [count, setCount] = useState(0);

    const onClick = () => {
        setCount(count + 1);
    }
    return (
        <div className="portal">
            <h1>Portal</h1>
            <div>Click count = {count}</div>
            <Modal>
                <SimpleButton caption="Push me" clickHandler={onClick}/>
            </Modal>
        </div>
    )
}

export { Portal }
