import * as React from 'react';
import { useParams} from "react-router-dom";

const RouterParams = () => {
    let params = useParams();    
    return (
        <div className="about">
            <h1>Router params</h1>
            <p>source = {params.source}</p>
        </div>
    )
}

export { RouterParams }
