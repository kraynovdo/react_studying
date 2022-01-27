const StartGen = function() {

let yCount = 0;


function* generateSequence() {
    console.log(yCount++);
    yield 1;
    console.log(yCount++);
    yield 2;
    console.log(yCount++);
    yield 3;
}
let generator1 = generateSequence();
for (let elem of generator1);


let generator2 = generateSequence();
let a = [0, ...generator2];
console.log(a);


let range = {
    from: 1,
    to: 5,
    *[Symbol.iterator](){
        for (let value = this.from; value <= this.to; value++) {
            yield value;
        }
    }
}
console.log([...range]);


function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
}
function* generatePasswordCodes() {
    // 0..9
    yield* generateSequence(48, 57);
    // A..Z
    yield* generateSequence(65, 90);
    // a..z
    yield* generateSequence(97, 122);
}
let str = '';
for(let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
}
console.log(str); // 0..9A..Za..z


function*someGenerator() {
    let res = yield 2;
    console.log('Total - ' + res);
}
let some_gen = someGenerator();
console.log(some_gen.next());
console.log(some_gen.next(33));

}
export {StartGen};