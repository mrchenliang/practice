const terminator = ".",
    openers = "{[(",
    following = {
        "[": "]",
        "{": "}",
        "(": ")",
    };

var isValid = function(s) {
    s = s + terminator;
    let stack = [terminator];
    console.log(stack);

    for (const c of s) {
        if (openers.includes(c)) {
            stack.push(following[c]);
        } else {
            if (stack.pop() != c) {
                return false;
            }
        }
    }
    return true;

};

isValid("()[]{}");