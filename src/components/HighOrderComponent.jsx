import * as React from 'react';

function ColorHoc(WrappedComponent, colorCallback) {
    return class extends React.Component {  
        constructor(props) {
            super(props);    
        }  
        render() {
            const colorCallbackResult = colorCallback(this.props);
            const cssClassName = colorCallbackResult ? 'green-color' : 'red-color';

            // ... и рендерит оборачиваемый компонент со свежими данными!
            // Обратите внимание, что мы передаём остальные пропсы
            return <WrappedComponent className={cssClassName} {...this.props} />;
        }
      };
}

export default ColorHoc;