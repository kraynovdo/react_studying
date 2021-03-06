import React from 'react';
import SearchContext from "../data/SearchContext";
import SimpleOutput from "./SimpleOutput";
import SimpleButton from "./SimpleButton";

const ContextComponent = () => {
    return (
        <div className="home">
            <SearchContext.Consumer>
                {({searchStr}) => <SimpleOutput outputValue={searchStr}/>}
            </SearchContext.Consumer>
            <SearchContext.Consumer>
                {({reset}) => <SimpleButton caption="reset" clickHandler={reset}/>}
            </SearchContext.Consumer>
        </div>
    )
}

export default ContextComponent;
