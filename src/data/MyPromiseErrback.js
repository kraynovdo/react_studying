class MyPromise {
    constructor(done) {
        this.state = 'initial';
        this.callbacks = [];
        this.errback = [];
        this.result = null;
        this.error = null;
        done(this.resolve.bind(this));
    }
    resolve(result) {
        if (this.state === 'initial') {
            this.state = 'resolved';

            this.result = result;
            this.callbacks.map(function(callback){
                let callbackresult = callback(curresult);

                if (callbackresult
            })
        } else {
            console.error('Promise is already in ${this.state} state');
        }
    }
    reject(result) {
        if (this.state === 'initial') {
            this.state = 'rejected'; 
        }
        else {
            console.error('Promise is already in ${this.state} state');
        }
    }
    then(callback) {
        this.callbacks.push(callback);
        return this;
    }
    catch(errback) {
        this.callbacks.push(callback);
        return this;
    }
}

export default MyPromise;
