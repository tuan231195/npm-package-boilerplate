import { Hello } from './utils';

describe('Test', () => {
    it('should pass', () => {
        expect(new Hello().getMessage()).toBe('Hello World');
    });
});
