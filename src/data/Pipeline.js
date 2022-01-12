class Pipeline {
    constructor() {
        this._stack = [];
    }

    step(fn) {
        this._stack.push(fn);
    }

    process(value, onResult) {
        this._stack.push(onResult);
        this._process(this._stack, value);
    }

    _process(stack, value) {
        if (stack.length) {
            let fn = stack.shift();

            if (fn instanceof Pipeline) {
                fn.process(value, (newValue) => {
                    this.value = newValue;
                    this._process(stack, newValue);
                });
            } else {
                fn(value, (newValue) => {
                    this.value = newValue;
                    this._process(stack, newValue);
                });
            }
        }
        return value;
    }
}

export default Pipeline;
