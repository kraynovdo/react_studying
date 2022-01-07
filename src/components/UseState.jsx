import React from 'react';
import { useState } from 'react';
import {BracketsSolve2} from '../data/Brackets';

function UseStateComponent() {

    const [str, setStr] = useState('');
    const [result, setResult] = useState();

    function solve(str) {
        const res = BracketsSolve2(str);
        setResult(res);
    }

    return (
        <div>
            <input type="text" value={str} onChange={e => setStr(e.target.value)}/>
            <div>
                <button onClick={() => solve(str)}>Solve</button>
            </div>
            <div>Result = {result}</div>
        </div>
  );
}

export {UseStateComponent};