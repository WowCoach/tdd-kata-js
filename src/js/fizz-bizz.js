const isFizz = (num) => {
    return num % 3 === 0;
};
const isBuzz = (num) => {
    return num % 5 === 0;
};
export const fizzBuzz = (num) => {
    if (isFizz(num) && isBuzz(num)) {
        return 'FIZZBUZZ';
    }
    if (isFizz(num)) {
        return 'FIZZ';
    }
    if (isBuzz(num)) {
        return 'BUZZ';
    }
    return num.toString();
};

