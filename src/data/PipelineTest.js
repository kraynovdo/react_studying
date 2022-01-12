import Pipeline from '../data/Pipeline';


const startTest = () => {
    let p = new Pipeline();
    let child = new Pipeline();
    child.step(function(v, next){ console.log("step 1a:", v); next(v+" wo"); });
    child.step(function(v, next){setTimeout(() => {console.log("step 1b:", v); next(v+"rld"); }, 3000)});
    p.step(child);
    p.step(function(v, next){ console.log("step 2:", v); next(v+"!"); });
    p.process("hello", res=> { console.log("result:", res)});
}

export default startTest;
