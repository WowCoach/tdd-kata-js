const isFizz = (num) => {
    return num % 3 === 0;
};
const isBuzz = (num) => {
    return num % 5 === 0;
};
export const fizzBuzz = (num) => {
    let result = '';
    if (isFizz(num)) {
        result += 'FIZZ';
    }
    if (isBuzz(num)) {
        result += 'BUZZ';
    }
    return result || num.toString();
};

