const assert = require('assert');
const { map } = require('../lib/array-methods');

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

});