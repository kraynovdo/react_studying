function fizzle(v) {
    const res = v + 2;
    console.log('fizzle ', res)
    return res;
}

function boggle(v1, v2) {
    const res = v1 + v2;
    console.log('boggle ', res)
    return res;
}

function fizzle_2(v, cb) {
    setTimeout(() => {
        const res = v + 2;
        console.log('fizzle2 ', res)
        cb(res)
    }, 700);
}

function boggle_2(v1, v2, cb) {
    setTimeout(() => {
        const res = v1 + v2;
        console.log('boggle2 ', res)
        cb(res)
    }, 500);
}

const startFizzle = () => {

    function calculate_11(input) {
        let qux = fizzle(input);
        return boggle(input, qux) + qux;
    }

    function calculate_12(input, cb) {
        fizzle_2(input, (qux) => {
            boggle_2(input, qux, (res) => cb(res + qux))
        })
    }

    //calculate_11(3);
    //calculate_12(3, (res) => res);


    function calculate_21(input){
        let qux = fizzle(input);
        while (qux < input)
            qux += boggle(input, qux);
        return qux;
    }



    function calculate_22(input, cb) {
        function boggleRec(value, sum, cb) {
            if (sum < value) {
                boggle_2(value, sum, function(res){
                    sum += res;
                    boggleRec(value, sum, cb)
                })
            } else {
                cb(sum);
            }
        }

        fizzle_2(input, (qux) => {
            boggleRec(input, qux, cb);
        })
    }

    //calculate_21(3);
    //calculate_22(3, (res) => res);


    function calculate_31(input) {
        return fizzle(input) / boggle(input, 0);
    }

    function calculate_32(input, cb) {
        let fizzleResStore;
        let boggleResStore;

        fizzle_2(input, (fizzleRes) => {
            if (fizzleRes === 0) {
                cb(0);
            } else {
                if (boggleResStore !== undefined) {
                    cb(fizzleRes / boggleResStore)
                } else {
                    fizzleResStore = fizzleRes;
                }
            }
        })

        boggle_2(input, 0, (boggleRes) => {
            if (fizzleResStore !== undefined) {
                cb(fizzleResStore / boggleRes)
            } else {
                boggleResStore = boggleRes;
            }
        })
    }

    //console.log(calculate_31(3));
    //calculate_32(3, (res) => {console.log(res)});


    function calculate_41(input) {
        let res = 1;
        for (let i = 0; i < input; i++)
            res *= fizzle(i);
        return res;
    }

    function calculate_42(input, cb) {
        let count = 0;
        let res = 1;

        function fizzleCb (fizzleRes) {
            count++;
            res *= fizzleRes;
            if (count === input) {
                cb(res);
            }
        }

        for (let i = 0; i < input; i++) {
            fizzle_2(i, fizzleCb);
        }

    }

    console.log(calculate_41(5));
    calculate_42(5, (res) => {console.log(res)});
}

export default startFizzle;