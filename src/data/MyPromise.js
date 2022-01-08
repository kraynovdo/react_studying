class MyPromise {
    constructor(done) {
        this.state = 'initial';
        this.callbacks = [];
        this.result = null;
        this.pending = false;
        done(this.resolve.bind(this));
    }
    resolve(result) {
        if (this.state === 'initial') {
            this.state = 'success';
            this.result = result;
            this._fire(result);

        } else {
            console.error('Promise is already in "success" state');
        }
    }
    then(callback) {
        this.callbacks.push(callback);
        if (this.state === 'success' && !this.pending) {
            this._fire(this.result);
        }
        return this;
    }

    _fire(result) {
        let curresult = result;
        while (this.callbacks.length) {
            let curCb = this.callbacks.shift();
            let cbResult = curCb(curresult);
            if (cbResult instanceof MyPromise) {
                this.pending = true;       
                cbResult.then((res) => {
                    this.pending = false;
                    this._fire(res);
                })
                break;
            } else {
                curresult = cbResult;
            }
        }
    }
}

export default MyPromise;
