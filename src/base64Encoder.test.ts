import {wrap} from "./base64Encoder";

describe('test wrap', () => {

    const text = 'This is a test text.';

    test('Wrap text after a number of characters that is greater than text length', () => {
       expect(wrap(text, 100)).toBe(text)
    });

    test('Wrap text after a number of characters that is smaller text length', () => {
        expect(wrap(text, 4)).toBe('This\n is \na te\nst t\next.');
    });

    test('wrap empty string', () => {
       expect(wrap('', 10)).toBe('');
    });

    test('wrap at 0', () => {
        expect(() => wrap(text, 0)).toThrowError(Error);
    });

});
