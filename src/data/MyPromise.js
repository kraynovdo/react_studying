class MyPromise {
    constructor(done) {
        this.callbacks = [];
        this.result = null;
        done(this.resolve.bind(this));
    }
    resolve(result) {
        this.result = result;
        this._fire(this.callbacks, result);
    }
    then(callback) {
        this.callbacks.push(callback);
        return this;
    }

    _fire(callbacks, result) {
        let curresult = result;
        while (callbacks.length) {
            let curCb = callbacks.shift();
            let cbResult = curCb(curresult);
            if (cbResult instanceof MyPromise) {
                let tailCallbacks = callbacks.splice(0); 
                cbResult.then((res) => {
                    this._fire(tailCallbacks, res);
                })
            } else {
                curresult = cbResult;
            }
        }
    }
}

export default MyPromise;
