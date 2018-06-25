function map(arr, callback) {
    const result = [];

    for(let i = 0; i < arr.length; i++) {
        const mapped = callback(arr[i]);
        result.push(mapped);
    }

    return result;
}

module.exports = {
    map
};