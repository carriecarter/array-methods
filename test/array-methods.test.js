const assert = require('assert');
const { map, filter } = require('../lib/array-methods');

describe('array methods', () => {


    describe('map', () => {
        
        it('transforms an array', () => {
            const arr = [1, 2, 3];
            const mapArray = map(arr, (val) => {
            
                return val + 1;
            });
            assert.deepEqual(mapArray, [2, 3, 4]);
        });
    });

    describe('filter', () => {

        it('returns truthy values in the array', () => {
            const arr = [1, 2, 3];
            const newArr = filter(arr, i => (i > 2));
            assert.deepEqual(newArr, [3]);
        });
    });
});