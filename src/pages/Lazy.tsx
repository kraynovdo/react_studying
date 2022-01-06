import React, { Suspense } from 'react';

const Lazy = () => {
    const SimpleFncComponent = React.lazy(() => import('../components/SimpleFncComponent'));
    let today = new Date();
    let isWeekend = today.getDay() == 6 || today.getDay() == 0
    
    return (
        <div className="lazy">
           <Suspense fallback={<div>Loading...</div>}>
                <SimpleFncComponent  day={today.getDate()} isWeekend={isWeekend}/>
            </Suspense> 
        </div>
    )
}

export { Lazy }
