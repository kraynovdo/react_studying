function BracketsSolve(str) {

    const stack = [];
    const openBrackets = ['[', '(', '{'];
    const closeBrackets = [']', ')', '}'];

    for (let i = 0; i < str.length; i++) {
        let bracketIndex = openBrackets.indexOf(str[i]);
        if (bracketIndex >= 0) {
            stack.push (closeBrackets[bracketIndex]);
        }

        if (closeBrackets.indexOf(str[i]) >= 0) {
            if (stack.pop() !== str[i]) {
                return 0;
            }
        }  
    }

    return +!stack.length;
}

function BracketsSolve2(str) {

    const stack = [];
    const mapBrackets = {'[' : ']', '{' : '}', '(': ')'};
    const closeBrackets = ']})'

    for (let i = 0; i < str.length; i++) {
        if (mapBrackets[str[i]]) {
            stack.push (mapBrackets[str[i]]);
        }

        if (closeBrackets.includes(str[i])) {
            if (stack.pop() !== str[i]) {
                return 0;
            }
        }  
    }

    return +!stack.length;
}

export {BracketsSolve, BracketsSolve2};

