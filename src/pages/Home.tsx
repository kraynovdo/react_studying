import SimpleFncComponent from '../components/SimpleFncComponent';
import SimpleComponent from '../components/SimpleComponent';

const Home = () => {
    let today = new Date();
    let isWeekend = today.getDay() === 6 || today.getDay() === 0
    return (
        <div className="home">
            <h1>HomePage</h1>
            <SimpleFncComponent day={today.getDate()} isWeekend={isWeekend}/>
            <SimpleComponent isWeekend={isWeekend}/>
        </div>
    )
}

export { Home }
