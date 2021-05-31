function sum(a, b) {
    return a + b
}

function cloneArray(array) {
    return [...array]
}

function subtract(a, b) {
    return a - b
}

function sortArray(map) {
    map.sort((a, b) => b - a);
    return map;
}

exports.sum = sum;
exports.cloneArray = cloneArray;
exports.subtract = subtract;
exports.sortArray = sortArray;
