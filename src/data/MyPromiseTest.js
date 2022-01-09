import MyPromise from '../data/MyPromise';


const startTest = () => {

/*Test 1
let promise = new MyPromise(function(resolve){
    window.setTimeout(function(){
        console.log('done main');
        resolve(1);
    }, 100)
}).then(function(result){
    console.log('callback. result = ' + result);
    return 2;
}, true).then(function(result) {
    console.log(result + ' before promise 1.1')
    return new MyPromise(function(resolve){
        window.setTimeout(function(){
            console.log('done 1.1');
            resolve(3);
        }, 1000)
    }).then(function(res){
        console.log('middle ' + res);
        return 3.5;
    })
}).then(function(result) {
    console.log(result + ' before promise 1.2')
    return new MyPromise(function(resolve){
        window.setTimeout(function(){
            console.log('done 1.2');
            resolve(4);
        }, 1000)
    })
}).then(function(result) {
    console.log('callback. result = ' + result);
    return 5;
})*/

/* Test 2

var a = new MyPromise();
var b = new MyPromise();

b.then(() => console.log(1))
b.then(() => console.log(2));
a.then(() => {b.resolve(); return b})
b.then(() => console.log(3))
a.resolve()
*/

/* Test 3
window.setTimeout(function(){
    promise.then(function(result) {
        console.log('callback. result = ' + result);
        return 20;
    }).then(function(result) {
        console.log(result + ' beforepromise 2.1');
        return new MyPromise(function(resolve){
            window.setTimeout(function(){
                console.log('done 2.1');
                resolve(30);
            }, 1000)
        }).then(function(){
            console.log('middle');
        })
    }).then(function(result) {
        console.log('callback. result = ' + result);
        return 40;
    }).then(function(result) {
        console.log(result + ' beforepromise 2.2');
        return new MyPromise(function(resolve){
            window.setTimeout(function(){
                console.log('done 2.2');
                resolve(50);
            }, 1000)
        })
    })
    .then(function(result) {
        console.log('callback. result = ' + result);
    })
}, 5000)
*/

}

export default startTest;