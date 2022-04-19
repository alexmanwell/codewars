const HEX_NUMERAL = "0123456789abcdef";
const BASE_HEX = 16;
const MAX_VALUE = 255;
const MIN_VALUE = 0;

function rgb(r, g, b){
    return toHex(r) + toHex(g) + toHex(b);
}

function toHex(number) {
    number = roundValidValue(number);
    return (HEX_NUMERAL.charAt(parseInt(number / BASE_HEX)) +  HEX_NUMERAL.charAt(number % BASE_HEX)).toUpperCase();
}

function roundValidValue(number) {
    return (number < MIN_VALUE) ? MIN_VALUE : (number > MAX_VALUE) ? MAX_VALUE : number;
}