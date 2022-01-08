import MyPromise from '../data/MyPromise';

const startTest = () => {
let promise = new MyPromise(function(resolve){
    window.setTimeout(function(){
        console.log('done main');
        resolve(1);
    }, 100)
}).then(function(result){
    console.log('callback. result = ' + result);
    return 2;
}).then(function(result) {
    console.log(result + ' before promise 1.1')
    return new MyPromise(function(resolve){
        window.setTimeout(function(){
            console.log('done 1.1');
            resolve(3);
        }, 1000)
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
})


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
}

export default startTest;