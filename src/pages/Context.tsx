import React from 'react';
import SearchContext from "../data/SearchContext";
import ContextComponent from "../components/ContextComponent";
import { useState } from 'react';

const Context = () => {
    const [str, setStr] = useState('');
    const searchCtxVal = {
        searchStr: str,
        reset: () => {
            setStr('')
        }
    }
    return (
        <div className="home">
            <h1>Context</h1>
            <input type="text" value={str} onChange={e => {setStr(e.target.value)}}/>
            <SearchContext.Provider value={searchCtxVal}>
                <ContextComponent></ContextComponent>
            </SearchContext.Provider>
        </div>
    )
}

export { Context }
