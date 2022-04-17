function validParentheses(parens){
    let countParens = 0;
    let isValid = true;
    for (let i = 0; i < parens.length; i++) {
        countParens = (parens[i] == "(") ? countParens + 1 : countParens - 1;

        if (countParens < 0) {
            return false;
        }
        if (countParens == 0) {
            isValid = true;
        }
        if (countParens > 0) {
            isValid = false;
        }
    }

    return isValid;
}