const speed = require('../javascript/speed');

describe('The average speed', () => {
    test('test 1', () => {
        expect(speed([5,10],[1,-2,3])).toEqual(8.3);
    });

    test('test 2', () => {
        expect(speed([2,4],[-1,2,-3,4])).toEqual(2.0);
    });
});