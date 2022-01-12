import MyPromise from '../data/MyPromise';


const startTest = () => {

    var a = new MyPromise();
    var b = new MyPromise();

    b.then(function () {
        console.log(1)
    });
    b.then(function () {
        console.log(2)
    });
    a.then(b);
    b.then(function () {
        console.log(3)
    });
    a.fire();
}

export default startTest;