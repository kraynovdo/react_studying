class MyPromise {
    constructor() {
        this._stack = [];
    }
    then(func) {
        this._stack.push(func);
    }
    fire() {
        this._fire(this._stack);
    }
    _fire(stack) {
        while (stack.length) {
            const fn = stack.shift();

            if (fn.then) { //instanceof MyPromis
                const tailStack = stack.splice(0);
                fn.then(() => {
                    this._fire(tailStack);
                });
                fn.fire();
            } else {
                fn();
            }
        }
    }
}

export default MyPromise;
