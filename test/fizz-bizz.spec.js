import {expect} from 'chai';
import {fizzBuzz} from '../src/js/fizz-bizz.js';

describe('Test Fizz Buzz', () => {
    it('should return a given number as a string', () => {
        expect(fizzBuzz(1)).to.equal('1');
    });
});


