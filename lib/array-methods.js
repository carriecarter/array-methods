function map(arr, callback) {
    const result = [];

    for(let i = 0; i < arr.length; i++) {
        const mapped = callback(arr[i]);
        result.push(mapped);

    }

    return result;
}

function filter(array, callback) {
    const newArr = [];

    for(var i = 0; i < array.length; i++) {
        if(callback(array[i]) === true) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

module.exports = {
    map,
    filter
};