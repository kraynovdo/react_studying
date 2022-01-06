import { InputOutput } from '../components/InputOutput';
import { UseStateComponent } from '../components/UseState';

const State = () => {
    return (
        <div className="state">
            <h1>State</h1>
            <InputOutput initialText="Ololo"/>
            <h1>UseState Hook</h1>
            <UseStateComponent/>
        </div>
    )
}

export { State }
