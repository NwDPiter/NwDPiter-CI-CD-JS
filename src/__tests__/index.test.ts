import { greet } from '../index';

describe('greet function', () => {
    test('should return a greeting message', () => {
        const result = greet('John');
        expect(result).toBe('Hello, John!');
    });

    test('should return a different greeting message for different names', () => {
        const result1 = greet('Alice');
        const result2 = greet('Bob');
        expect(result1).toBe('Hello, Alice!');
        expect(result2).toBe('Hello, Bob!');
    });
});
